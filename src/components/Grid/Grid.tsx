import React from 'react'
import Button from '../Button'
import { Container } from './styles'
// import Header from '../Header'
// import Sidebar from '../Sidebar'
// import TableTime from '../TableTime'

// interface TimetableProps {
//   name: string;
//   size: number;
//   x: number;
//   y: number;
// }

// interface TimeProps {
//   name: string;
//   size: number;
// }
// export default function Grid(props: {title: string, week: Array<string>, time: Array<TimeProps>, listTimetable: Array<TimetableProps>}){
//   let columns = `10fr repeat(${props.week.length}, ${90/props.week.length}fr)`
//   let rows = "50px 50px"  
//   props.time.forEach(el => {
//     rows += ` ${el.size}fr`
//   })

export default function Grid(){
  let columns = `10fr`
  let rows = `10fr`
  return(
    <Button/>
    // <Container>
      
    //   <Header week={props.week} title={props.title}/>
    //   <Sidebar time={props.time}/>
    //   <TableTime listTimetable={props.listTimetable} rows={props.time.length} cols={props.week.length}/>
    // </Container>
  )
}