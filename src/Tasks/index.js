import "./style.css";


const Tasks = ({ tasks, hideCompleted }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id} className={`taskList__item${task.done && hideCompleted ? "taskList__item--hidden" : ""}`}>
                <button className="button">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`task__content ${task.done ? "taskList__done" : ""}`}>
                    {task.content}
                </span>
                <button className="button button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;