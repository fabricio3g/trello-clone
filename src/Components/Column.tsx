import React from 'react'
import { Card } from './Card'
import {ColumnContainer, ColumnTitle} from '../Styles'
import { AddNewItem } from './AddNewItem'

import { useAppState } from '../state/AppStateContext'
import { addTask } from '../state/actions'

interface ColumnProps{
    text: string
    id:string
}


type PropsWithChildren<P> = P & {
    children?: React.ReactNode;
    }

export const Column =({text, id}: PropsWithChildren<ColumnProps>)=>{

    const { getTasksById, dispatch } = useAppState()

    const tasks = getTasksById(id)
    
    console.log(id)
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
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}