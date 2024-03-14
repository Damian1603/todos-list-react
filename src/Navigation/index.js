import { StyledNavigationList, StyledNavLink } from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigationList>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledNavigationList>
    )
};