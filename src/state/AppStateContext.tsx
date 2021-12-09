import { createContext, useContext, FC, useReducer, Dispatch } from "react"
import {appStateReducer, List, Tasks, AppState } from './AppStateReducer'
import { useImmerReducer } from "use-immer"

import { Action } from "./actions"

const AppStateContext = createContext({} as AppStateContextProps)

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: 'Todo',
            tasks: [
                {
                    id: "001",
                    text: "generator thing"
                },

            ]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksById(id: string): Tasks[]
    dispatch: Dispatch<Action>
}




export const AppStateProvider:FC = ({children})=>{
    

    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists } = state
    const getTasksById = ( id:string ) =>{
        return appData.lists.find((lists) => lists.id === id)?.tasks || [];
    }

    return(
        <AppStateContext.Provider value={{ lists, getTasksById, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}



export const useAppState =()=>{
    return useContext(AppStateContext)
}

