import React,{useState} from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../Styles";
import { useFocus } from '../utils/useFocus'

interface NewItemFormProps {
    onAdd(text:string):void
}


export const NewFormItem =(props:NewItemFormProps)=>{
    const [text, setText] = useState("")
    const { onAdd } = props
    const inputRef = useFocus()
    
    const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            onAdd(text)
        }
    }

    return(
        <NewItemFormContainer>
            <NewItemInput 
                onKeyPress={handleAddText}
                value={text}
                ref={inputRef} 
                onChange={e => setText(e.target.value)}
            />
            <NewItemButton onClick={()=> onAdd(text)}>
               Create 
            </NewItemButton>
        </NewItemFormContainer>
    )
}

