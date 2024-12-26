import { ADD_TODO, TOOGLE_STATUS_TODO } from "../actions/todoAction";

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

function todoReducers(state = initialState,action){
    switch (action.type) {
        case ADD_TODO:{
            return {
                ...state,
                todoList:[
                    {content:action.text,status:0},
                    ...state.todoList
                ]
            }
        }
        case TOOGLE_STATUS_TODO:{
            const newTodoList = state.todoList.map((item,index) =>{
                if(index == action.index){
                    item.status = item.status == 0 ? 1:0;
                }
                return item;
            })
            return {
                ...state,
                todoList:newTodoList
            }
        }
        default:
            return state;
    }
}

export default todoReducers;