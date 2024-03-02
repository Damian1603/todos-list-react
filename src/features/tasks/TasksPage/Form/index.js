import { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from '../../tasksSlice';
import { StyledForm, StyledInput, StyledButton } from "./styled";

export const Form = () => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTask = newTaskContent.trim();

        if (!trimmedNewTask) {
            return
        }
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }))
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
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    )
};