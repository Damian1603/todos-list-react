import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  height: 30px;
  width: 30px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  &:active{
    outline: auto black;
    background-color: ${({ theme }) => theme.colors.activeGreen}
  }
`;

export const StyledButtonRemove = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.crimson};
  font-weight: normal;

  &:hover{
  background-color:${({ theme }) => theme.colors.lightCrimson}
  }

  &:active{
    background-color:${({ theme }) => theme.colors.activeCrimson} 
  }
`;

export const StyledLinkTask = styled(Link)`
  text-decoration: none;
  color: teal;
  transition: 0.5s;
  
  &:hover{
    color: ${({ theme }) => theme.colors.lightTeal};
  }

  &:active{
    color:${({ theme }) => theme.colors.activeTeal} 
  }
`;