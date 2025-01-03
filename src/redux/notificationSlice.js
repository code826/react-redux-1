import { createSlice } from "@reduxjs/toolkit";
import { add } from "./todoSlice";


const notificationSlice = createSlice({
    name:"notification",
    initialState:[],
    reducers:{
        addNotification:(state,action) =>{
            state.push(action.payload)
        }
    },
    // extraReducers:{
    //     "todo/add":(state,action) =>{
    //         console.log("todo/add action has been done");
    //         state.push("todo added");
    //     }
    // }
    extraReducers : (builder) =>{
        builder.addCase(add,(state) =>{
            console.log('todo state updated');
            state.push('todo added');
        })
    }
});

export const {addNotification} = notificationSlice.actions;

export default notificationSlice.reducer;