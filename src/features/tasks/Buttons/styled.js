import styled from "styled-components";

export const StyledButton = styled.div`
    display: flex;
    gap: 10px;
 
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const StyledButtonHeader = styled.button`
    color: teal;
    background-color: transparent;
    border: 0px transparent;
    transition: 0.5s;

    cursor:pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 5px;
    }

    &:hover{
    color:${({ theme }) => theme.colors.activeTeal}
    }
    &:disabled{
        color: #ddd;
    }
`;