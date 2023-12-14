import styled from "styled-components";

export const StyledButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
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