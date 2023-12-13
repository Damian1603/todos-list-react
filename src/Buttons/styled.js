import styled from "styled-components";

export const StyledButton = styled.div`
    display: flex;
`;

export const StyledButtonHeader = styled.button`
    color: teal;
    background-color: transparent;
    border: 0px transparent;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
    color: hsl(180, 100%, 35%);
    }
    &:disabled{
        color: #ddd;
    }
`;