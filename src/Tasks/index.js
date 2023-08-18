import "./style.css";


const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li
                className={`taskList__item${task.done && props.hideCompleted ? "taskList__item--hidden" : ""}`}>
                <button className="button">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`task.done ? "taskList__done" : ""`}>
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