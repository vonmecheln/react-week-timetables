import React from 'react';
import { Cell } from '../../css/Cell'

export interface TimetableProps {
  name: string;
  size: number;
  x: number;
  y: number;
}

export default function TableTime(props: {listTimeTable: Array<TimetableProps>, rows: number, cols: number}) {

  // if (props.listTimeTable.length === 0){
  //   for (let index = 1; index <= (props.rows * props.cols); index++){
  //     props.listTimeTable.push({name: "index", size: 1})
  //   }
  // }

  let r = 1
  let c = 0
  const or = 2 //OFFSET ROW
  const oc = 1 //OFFSET COL

  return (
    <>
      {
        props.listTimeTable.map((el) => {

          if ( c < props.cols ) 
            c++
          else { 
            c = 1
            r+=1
          }

          let ga = `${or+el.x} / ${oc+el.y} / ${or + el.size + el.x} / ${oc + 1 + el.y}`
          return <Cell key={el.name} gridArea={ga}>{`${el.name} (${r}, ${c}) ${ga}`}</Cell>
        })
      }
    </>
  )
}