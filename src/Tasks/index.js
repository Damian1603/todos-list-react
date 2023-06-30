import React from "react";
import "./style.css";


const Tasks = ({tasks}) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className="taskList__item" >
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