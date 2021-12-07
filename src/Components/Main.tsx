import React from "react";
import {AppContainer} from '../Styles'
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import { useAppState } from '../state/AppStateContext'


const Main = ()=> {

    const { lists } = useAppState();
    
        return(
            <AppContainer>
                {
                    lists.map(list => (
                        <Column text={list.text} id={list.id} />
                    ))
                }
                
                <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log}/>
            </AppContainer>
        )
}


export default Main