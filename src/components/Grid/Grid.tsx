import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TableTime from '../TableTime'

export default function Grid(props: {title: string}) {
  
  const week = ["Segunda-feira", "Terça-feira", "Quarta-feira" , "Quinta-feira", "Sexta-feira", "Sábado"]

  const time = [
      {
        name: "07:30 - 08:20",
        size: 50  
      }, 
      {
        name: "08:20 - 09:10",
        size: 50  
      }, 
      {
        name: "Intervalo (09:10 - 09:25)",
        size: 15  
      }, 
      {
        name: "09:25 - 10:15",
        size: 50  
      }, 
      {
        name: "10:15 - 11:05",
        size: 50  
      }, 
      {
        name: "11:05 - 11:55",
        size: 50  
      }, 
      {
        name: "Intervalo (11:55 - 13:10)",
        size: 75  
      }, 
    ]
    const listTimeTable = [
    {
      name: "Matemática",
      size: 2,
      day: 'Segunda-feira',
      timeBegin: "07:30 - 08:20"
    },
    {
      name: "Português",
      size: 1,
      day: 'Terça-feira',
      timeBegin: "08:20 - 09:10"
    }
  ]

  const listTimeTransform = [
    {
      name: "Matemática",
      size: 2,
      x: 1,
      y: 1
    },
    {
      name: "Português",
      size: 1,
      x: 2,
      y: 2
    },
    {
      name: "Geografia",
      size: 1,
      x: 1,
      y: 2
    },
    {
      name: "História",
      size: 2,
      x: 1,
      y: 3
    },
    {
      name: "Biologia",
      size: 2,
      x: 1,
      y: 4
    }

  ]
  
  let columns = `10fr repeat(${week.length}, ${90/week.length}fr)`
  let rows = "50px 50px"
  time.forEach(el => {
    rows += ` ${el.size}fr`
  })
  
  return(
    <Container columns={ columns } rows={rows}>
      <Header week={week} title={props.title}/>
      <Sidebar time={time}/>
      <TableTime listTimeTable={listTimeTransform} rows={time.length} cols={week.length}/>
    </Container>
  )
}