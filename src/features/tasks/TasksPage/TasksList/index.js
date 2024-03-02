import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import {
    StyledList,
    StyledItem,
    StyledContent,
    StyledButton,
    StyledLinkTask,
    StyledButtonRemove,
} from "./styled";

export const TasksList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

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
}