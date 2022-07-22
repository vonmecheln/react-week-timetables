import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  padding: 0 1rem;
`