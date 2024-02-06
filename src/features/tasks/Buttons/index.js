import { selectTasks, toogleHideDone, setAllDone } from "../tasksSlice";
import { StyledButton, StyledButtonHeader } from "./styled";
import { useDispatch, useSelector } from "react-redux";

export const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()

    return (
        <StyledButton>
            {tasks.length > 0 && (
                <>
                    <StyledButtonHeader
                        onClick={() => dispatch(toogleHideDone())}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </StyledButtonHeader>
                    <StyledButtonHeader
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </StyledButtonHeader>
                </>
            )}
        </StyledButton>
    )
};