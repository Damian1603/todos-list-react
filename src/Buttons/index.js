import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideCompleted }) => {
    if (tasks.length === 0) {
        return null
    }

    return (
        <div className="section__headerButtons">
            <button className={`section__headerButtons`}>
                {hideCompleted ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                className="section__headerButtons"
                disabled={tasks.every(({ done })=> done)}
            >
                Ukończ wszystkie
            </button>
        </div >
    )
};

export default Buttons;