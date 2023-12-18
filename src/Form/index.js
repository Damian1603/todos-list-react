import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

export const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTask = newTaskContent.trim();

        if (!trimmedNewTask) {
            return
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                required
            />
            <StyledButton
                >
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    )
};