import React from 'react'
import { Cell } from '../../css/Cell.js'
let timeOffSet = 3

interface TimeClassesProps {
  name: string;
  size?: number;
}
export default function Sidebar(props: {time: Array<TimeClassesProps>}) {
  return(
    <>
      <Cell gridArea="1 / 1 / 3 / 2"></Cell>
      {
        props.time.map(timeEl => 
          <Cell 
          gridArea= {`${timeOffSet} / 1 / ${timeOffSet++} / 2`} key={timeEl.name}>
            <span>{timeEl.name}</span>
          </Cell>  
        )
      } 
    </>
  )
}
