import React, {Component} from "react";
import {AppContainer} from './Styles'

import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";



class Main extends Component{

    
    render(){
        return(
            <AppContainer>
                <Column text="Todos">
                    <Card text="Walk the dog"/>
                </Column>
                <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log}/>
            </AppContainer>
        )
    }
}


export default Main