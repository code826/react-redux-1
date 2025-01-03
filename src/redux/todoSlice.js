import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    todoList:[
            {
                "content":"Wake up early",
                "status":0
            },
            {
                "content":"sleep early",
                "status":1
            }
        ]
}
const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        add:(state,action) =>{
            console.log('action',action);
            state.todoList.push( {content:action.payload.text,status:0});
        },
        toggle:(state,action) =>{
            for(let i=0;i<state.todoList.length;i++){
                if(i == action.payload.index){
                    state.todoList[i].status = state.todoList[i].status == 1 ? 0:1;
                }
            }
        }
    }
})

export const {add,toggle} = todoSlice.actions;
export default todoSlice.reducer;