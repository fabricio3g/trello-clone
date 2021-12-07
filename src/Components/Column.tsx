import React from 'react'
import { Card } from './Card'
import {ColumnContainer, ColumnTitle} from '../Styles'
import { AddNewItem } from './AddNewItem'

import { useAppState } from '../state/AppStateContext'

interface ColumnProps{
    text: string
    id:string
}


type PropsWithChildren<P> = P & {
    children?: React.ReactNode;
    }

export const Column =({text, id}: PropsWithChildren<ColumnProps>)=>{

    const { getTasksById } = useAppState()

    const tasks = getTasksById(id)

    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
            tasks.map( (task: any) => (
                <Card text={task.text} key={task.id} id={task.id}></Card>
            ))       
            }
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}