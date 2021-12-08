import React from "react"
import {CardContainer} from '../Styles'

interface CardProps{
    text: string
    id:string
}

export const Card = ({text, id}: CardProps )=>{

    return <CardContainer key={id} id={id} >{text}</CardContainer>
}