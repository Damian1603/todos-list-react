import styled, { css } from "styled-components"

export const List = styled.ul`
 padding: 20px 20px;
 list-style: none;
`;

export const Item = styled.li`
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

export const Content = styled.span`
  ${({ done }) => done && css`
    text-decoration: line-through;
`}
`;
