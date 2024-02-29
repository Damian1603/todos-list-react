import { StyledForm, StyledInput } from "../Form/styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");
    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete("szukaj")
        } else {
            searchParams.set("szukaj", target.value)
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <StyledForm>
            <StyledInput
                placeholder="Wyszukaj zadanie"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    )
};