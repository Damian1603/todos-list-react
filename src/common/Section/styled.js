import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px;
    box-shadow: 8px 8px 24px -20px rgba(66, 68, 90, 1);
`;

export const StyledHeader = styled.header`
    border-bottom: 2px solid #eee;
    padding: 20px;
    gap: 20px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        gap: 10px;
 }
`;

export const StyledHeaderName = styled.h3`
    padding: 5px;
    margin: 0;
`;

export const StyledDescription = styled.p`
    padding: 20px;
    margin: 5px;
`;