import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
  grid-template-columns: 1fr;
}
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #eee;
  width: 100%;
`;


export const StyledButton = styled.button`
  background-color: ${({theme})=>theme.colors.teal};
  color: ${({theme})=>theme.colors.white};
  border: 0px;
  padding: 10px;
  transition: 1s;
  cursor: pointer;

  &:hover {
  transform: scale(1.1);
  background-color: ${({ theme }) => theme.colors.lightTeal};
  }
`;