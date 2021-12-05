import React from 'react'

import {ColumnContainer, ColumnTitle} from '../Styles'

interface ColumnProps{
    text: string
}


type PropsWithChildren<P> = P & {
    children?: React.ReactNode;
    }

export const Column =({text, children}: PropsWithChildren<ColumnProps>)=>{


    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}