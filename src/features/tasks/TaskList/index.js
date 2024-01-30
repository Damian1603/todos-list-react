import { StyledList, StyledItem, StyledContent, StyledButton, StyledButtonRemove } from "./styled";

export const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledItem
                key={task.id}
                hidden={task.done && hideDone}>
                <StyledButton
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </StyledButton>
                <StyledContent done={task.done}>
                    {task.content}
                </StyledContent>
                <StyledButtonRemove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </StyledButtonRemove>
            </StyledItem>
        ))}
    </StyledList>
);