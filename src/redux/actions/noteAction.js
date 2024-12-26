export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

export const addNote = (text) =>{
    return {
        type:ADD_NOTE,
        text:text
    }
}

export const deleteNote = (index) =>{
    return {
        type :DELETE_NOTE,
        index:index
    }
}