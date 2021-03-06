import styled from 'styled-components'




export const AppContainer = styled.div`
    align-items: flex-start;
    background: #3179ba;
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow: auto;
`


export const ColumnContainer = styled.div`
    background: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
    display: inline-block;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: .5rem;
    padding: .5rem 1rem;
    max-width: 500px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;

`



interface AddItemButtonProps{
    dark?: boolean
}


export const AddItemButton = styled.button<AddItemButtonProps>`
    background: #ffffff3d;
    border-radius: 3px;
    border: none;
    max-width: 300px;
    color: ${ props => (props.dark ? "#000" : "#fff") };
    cursor: pointer;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &hover{
        background: #ffffff52;
    }
`


export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const NewItemButton = styled.button`
    background: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding : 6px 12px ;
    text-align: center;
`
export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    margin-bottom: .5rem;
    padding: .5rem 1rem;
    width: 89%;
`