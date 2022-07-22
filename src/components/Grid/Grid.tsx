import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TableTime from '../Timetable'

interface ClassesProps {
  subject: string;
  size: number;
  x: number;
  y: number;
}

interface TimeProps {
  time: string;
  size: number;
}

  
export default function Grid(props: {title: string, weekDays: Array<string>, time: Array<TimeProps>, listClasses: Array<ClassesProps>}){
    let columns = `10fr repeat(${props.weekDays.length}, ${90/props.weekDays.length}fr)`
    let rows = "50px 50px"  
    props.time.forEach(el => {
      rows += ` ${el.size}fr`
    })
    return(
    <Container columns={columns} rows={rows}>
      <Header weekDays={props.weekDays} title={props.title}/>
      <Sidebar timeClasses={props.time}/>
      <TableTime listClasses={props.listClasses} rows={props.time.length} cols={props.weekDays.length}/>
    </Container>
  )
}