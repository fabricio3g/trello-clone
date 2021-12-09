export type Action = 
    |{
        type:'ADD_LIST'
        payload: string
    }
    |{
        type: 'ADD_TASK'
        payload: { 
            text:string
            id: string
        }
    }

export const addTask = ( text: string, id: string ):Action => ({
    type: "ADD_TASK",
    payload:{
        text,
        id 
    }
})

export const addList = (text:string): Action => ({
    type: "ADD_LIST",
    payload:text
})