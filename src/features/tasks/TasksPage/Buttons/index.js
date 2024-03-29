import { useDispatch, useSelector } from "react-redux";
import { StyledButton, StyledButtonHeader } from "./styled";
import {
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectHideDone
} from "../.././tasksSlice";

export const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch()

    return (
        <StyledButton>
            {!areTasksEmpty && (
                <>
                    <StyledButtonHeader
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </StyledButtonHeader>
                    <StyledButtonHeader
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </StyledButtonHeader>

                </>
            )}
        </StyledButton>
    );
};