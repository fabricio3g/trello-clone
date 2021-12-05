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
    return(
        <NewItemFormContainer>
            <NewItemInput 
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

