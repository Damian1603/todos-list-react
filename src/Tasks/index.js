import "./style.css";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                 className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}>
                <button 
                onClick = {() => toggleTaskDone(task.id)}
                className="button">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`task__content ${task.done ? "taskList__done" : ""}`}>
                    {task.content}
                </span>
                <button 
                onClick = {() => removeTask(task.id)}
                className="button button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;