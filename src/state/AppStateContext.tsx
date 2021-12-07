import { createContext, useContext, FC } from "react"



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
                }
            ]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksById(id: string): Tasks[]
}

export type AppState = {
    lists: List[];
}



type Tasks = {
    id: string,
    text: string
}


type List = {
    id: string,
    text: string,
    tasks: Tasks[]
}




export const AppStateProvider:FC = ({children})=>{
    const { lists } = appData

    const getTasksById = ( id:string ) =>{
        return appData.lists.find((list) => list.id === id)?.tasks || [];
    }

    return(
        <AppStateContext.Provider value={{ lists, getTasksById}}>
            {children}
        </AppStateContext.Provider>
    )
}



export const useAppState =()=>{
    return useContext(AppStateContext)
}

