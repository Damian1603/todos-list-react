import { StyledButton, StyledButtonHeader } from "./styled";

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <StyledButton>
        {tasks.length > 0 && (
            <>
                <StyledButtonHeader
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </StyledButtonHeader>
                <StyledButtonHeader
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </StyledButtonHeader>
            </>
        )}
    </StyledButton>
);