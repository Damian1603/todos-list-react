import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import {
    StyledList,
    StyledItem,
    StyledContent,
    StyledButton,
    StyledLinkTask,
    StyledButtonRemove,
} from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameters } from "../../queryParameters";

export const TasksList = () => {

    const query = useQueryParameters(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <StyledButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </StyledButton>
                    <StyledContent done={task.done}>
                        <StyledLinkTask to={`/zadania/${task.id}`}> {task.content}</StyledLinkTask>
                    </StyledContent>
                    <StyledButtonRemove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </StyledButtonRemove>
                </StyledItem>
            ))}
        </StyledList>
    )
};