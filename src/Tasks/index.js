
import { List, Item, Content } from "./styled";

export const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="button">
                    {task.done ? "✓" : ""}
                </button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <button
                    onClick={() => removeTask(task.id)}
                    className="button button--remove">
                    🗑
                </button>
            </Item>
        ))}
    </List>
);