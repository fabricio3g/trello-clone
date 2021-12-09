import React from "react";
import {AppContainer} from '../Styles'
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { addList } from '../state/actions'
import { useAppState } from '../state/AppStateContext'


const Main = ()=> {

    const { lists, dispatch } = useAppState();
    
        return(
            <AppContainer>
                {
                    lists.map(list => (
                        <Column text={list.text} key={list.id} id={list.id} />
                    ))
                }
                
                <AddNewItem toggleButtonText="+ Add Another list" onAdd={text => dispatch(addList(text))}/>
            </AppContainer>
        )
}


export default Main