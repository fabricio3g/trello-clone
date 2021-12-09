import { nanoid } from "nanoid";
import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayUtil";
export type AppState = {
    lists: List[];
}



export type Tasks = {
    id: string,
    text: string
}


export type List = {
    id: string,
    text: string,
    tasks: Tasks[]
}

export const appStateReducer =(draft: AppState, action: Action):AppState | void=>{
    
    switch(action.type){
        case "ADD_LIST":
            console.log(draft.lists)
            draft.lists.push(
                {
                    id: nanoid(), 
                    text: action.payload, 
                    tasks: []
                }
            ) 
            break
        case "ADD_TASK":
            const {text, id} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, id)
            draft.lists[targetListIndex].tasks.push(
                {   
                    id: nanoid(),
                    text
                }
            )
            break
        default:
            break
    }
}