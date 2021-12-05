import React from "react"
import {CardContainer} from '../Styles'

interface CardProps{
    text: string
}

export const Card = ({text}: CardProps )=>{

    return <CardContainer>{text}</CardContainer>
}