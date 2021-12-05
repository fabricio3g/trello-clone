import React,{useState} from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./Styles";

interface NewItemFormProps {
    onAdd(text:string):void
}


export const NewFormItem =(props:NewItemFormProps)=>{
    const [text, setText] = useState("")
    const { onAdd } = props

    return(
        <NewItemFormContainer>
            <NewItemInput value={text} 
                onChange={e => setText(e.target.value)}
            />
            <NewItemButton onClick={()=> onAdd(text)}>
               Create 
            </NewItemButton>
        </NewItemFormContainer>
    )
}

