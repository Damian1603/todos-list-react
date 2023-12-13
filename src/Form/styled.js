import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  @media (max-width: 767px) {
  grid-template-columns: 1fr;
}
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #eee;
`;

export const StyledButton = styled.button`
  background-color: teal;
  color: white;
  border: 0px;
  padding: 10px;
  transition: 1s;
  cursor: pointer;
  &:hover {
  transform: scale(1.1);
  background-color: hsl(180, 100%, 30%);
  }
`;