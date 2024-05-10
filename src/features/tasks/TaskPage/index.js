import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import { StyledContainer } from "../../../common/Container/styled.js";
import { Section } from "../../../common/Section";
import { StyledDescription } from "../../../common/Section/styled.js";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice.js";

export function TaskPage() {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <StyledContainer>
            <h1>Szczegóły zadania</h1>
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={!!task &&
                    <StyledDescription>
                        <><strong>Ukończono: </strong>{task.done ? "Tak" : "Nie"}</>
                    </StyledDescription>
                }
            />
        </StyledContainer>
    )
};