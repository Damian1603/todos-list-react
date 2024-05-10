import { StyledButtonHeader } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksLoading } from "../../tasksSlice";

export const FetchExampleTasksButton = () => {

    const dispatch = useDispatch(fetchExampleTasks);
    const loading = useSelector(selectTasksLoading);

    return (
        <StyledButtonHeader disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledButtonHeader>
    )
};