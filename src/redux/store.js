import * as redux from 'redux';
import todoReducers from './reducers/todoReducers';
import noteReducers from './reducers/noteReducers';

const reducer = redux.combineReducers({
    todoReducers:todoReducers,
    noteReducers:noteReducers
})

const store = redux.createStore(reducer);

export default store;