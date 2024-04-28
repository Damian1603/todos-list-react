import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const StyledNavigationList = styled.ul`
    display: flex;
    justify-content: center;
    background-color: teal;
    margin: 0;
    padding: 0;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;
    padding: 5px;
    margin:20px;
    font-size: 23px;;

    &.${activeClassName} {
        font-weight: bold;
    }
`;