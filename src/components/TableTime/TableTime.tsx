import React from 'react';
import { Cell } from '../../css/Cell'

export interface TimetableProps {
  name: string;
  size: number;
  x: number;
  y: number;
}

export default function TableTime(props: {listTimetable: Array<TimetableProps>, rows: number, cols: number}) {
  let row = 1
  let col = 0
  const or = 2 //OFFSET ROW
  const oc = 1 //OFFSET COL

  return (
    <>
      {
        props.listTimetable.map((el) => {

          if ( col < props.cols ) 
            col++
          else { 
            col = 1
            row+=1
          }

          let ga = `${or+el.x} / ${oc+el.y} / ${or + el.size + el.x} / ${oc + 1 + el.y}`
          return <Cell key={el.name} gridArea={ga}>{`${el.name} (${row}, ${col}) ${ga}`}</Cell>
        })
      }
    </>
  )
}