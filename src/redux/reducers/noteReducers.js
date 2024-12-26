import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction";

const initialState = {
    noteList:[
        {
            "content":"Wake up early",
          
        },
        {
            "content":"sleep early",
         
        }
    ]
}

function noteReducers(state = initialState,action){
    switch (action.type) {
        case ADD_NOTE:{
            return {
                ...state,
                noteList:[
                 ...state.noteList,
                 {content:action.text}
                ] 
            }

        }
        case DELETE_NOTE:{
            return {
                ...state,
                noteList:state.noteList.filter((item,index) =>{
                    return index != action.index;
                })
            }
        }
            
        
        default:{
            return state;
        }
    }
}

export default noteReducers;