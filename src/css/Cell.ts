import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  outline: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`