//
export const ADD_TODO = 'Add Todo';
export const TOOGLE_STATUS_TODO = 'Toogle Todo Status';

//action creator

export const addTodo = (text) =>{
    return {
        type:ADD_TODO,
        text:text
    }
}

export const toogleTodoStatus = (index) =>{
    return {
        type:TOOGLE_STATUS_TODO,
        index:index
    }
}

