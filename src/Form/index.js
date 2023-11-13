import { useState } from "react";
import "./style.css";

export const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTask = newTaskContent.trim();

        if (!trimmedNewTask) {
            return
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                required
            />
            <button className="form__button">
                Dodaj zadanie
            </button>
        </form>
    )
};