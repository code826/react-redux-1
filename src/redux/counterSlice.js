import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    counter:1
}
//counter/increment
const counterSlice = createSlice({
    name:"counter",
    initialState:defaultState,
    reducers:{
        increment:(state) =>{
            state.counter +=1;
        },
        decrement:(state) =>{
            state.counter -=1;
        },
        reset:(state) =>{
            state.counter = 0
        }
    }

});
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;