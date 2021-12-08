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

export const addTask = ( text: string, listId: string ):Action =>