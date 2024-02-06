import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toogleTaskDone, removeTask } from "../tasksSlice";
import {
    StyledList,
    StyledItem,
    StyledContent,
    StyledButton,
    StyledButtonRemove,
} from "./styled";

export const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <StyledButton
                        onClick={() => dispatch(toogleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </StyledButton>
                    <StyledContent done={task.done}>
                        {task.content}
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