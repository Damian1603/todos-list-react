import { StyledButtonHeader } from "../Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

export const FetchExampleTasksButton = () => {

    const dispatch = useDispatch(fetchExampleTasks);
    
    return (
        <StyledButtonHeader onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledButtonHeader>
    )
};