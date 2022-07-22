import styled from "styled-components"

export const Container = styled.div<{columns: string, rows: string}>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  margin: 1rem auto;
  width: 95vw;
  height: 95vh;
  border: 1px solid black;
  gap: 0;
  background-color: #E1E1E1;
`

