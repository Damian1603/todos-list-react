import { StyledForm, StyledInput } from "../Form/styled";
import { useQueryParameters, useReplaceQueryParameters } from "../../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

export const Search = () => {

    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName, value: target.value.trim() !== "" ? target.value : undefined
        });
    };

    return (
        <StyledForm>
            <StyledInput
                placeholder="Wyszukaj zadanie"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    );
};