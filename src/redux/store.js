import * as redux from 'redux';
// import todoReducers from './reducers/todoReducers';
import noteReducers from './reducers/noteReducers';
import counterReducers from "./counterSlice";
import todoReducers from "./todoSlice";
import notificationReducers from "./notificationSlice";
import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from '../middleware/loggerMiddleware';

// const reducer = redux.combineReducers({
//     todoReducers:todoReducers,
//     noteReducers:noteReducers,
//     counterReducers:counterReducers
// })

const store = configureStore({
    reducer:{
        todoReducers:todoReducers,
        noteReducers:noteReducers,
        counterReducers:counterReducers,
        notificationReducers:notificationReducers
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(loggerMiddleware);
    }
})

//const store = redux.createStore(reducer);

export default store;