import styled, { css } from "styled-components"

export const StyledList = styled.ul`
 padding: 20px 20px;
 list-style: none;
`;

export const StyledItem = styled.li`
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  border-bottom: 2px solid #eee;
  ${({ hidden }) => hidden && css`
   display: none;
  `}
`;

export const StyledContent = styled.span`
  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

export const StyledButton = styled.button`
  background-color: green;
  color: white;
  border: 0;
  height: 30px;
  width: 30px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    background-color: hsl(120, 100%, 30%);
  }
  &:active{
    outline: auto black;
    background-color: hsl(120, 100%, 35%);
  }
`;

export const StyledButtonRemove = styled.button`
  background-color: crimson;
  color: white;
  font-weight: normal;
  border: 0;
  height: 30px;
  width: 30px;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
  background-color: hsl(348, 83%, 52%);
  }
  &:active{
    background-color: hsl(348, 83%, 57%);
  }
`