import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";
import {
    StyledList,
    StyledItem,
    StyledContent,
    StyledButton,
    StyledButtonRemove,
} from "./styled";

export const TaskList = () => {
    const tasks = useSelector(selectTasks);
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