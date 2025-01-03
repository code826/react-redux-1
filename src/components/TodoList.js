import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTodoStatus } from "../redux/actions/todoAction";
import { toggle } from "../redux/todoSlice";

const TodoList = () =>{
   const todoList =  useSelector((state) =>{
        return state.todoReducers.todoList;
    });
    const notification = useSelector((state) =>{
        return state.notificationReducers
    });
    const dispatch = useDispatch();
    console.log('notification',notification);
    // const [todoList,setTodoList] = useState([
    //     {
    //         "content":"Wake up early",
    //         "status":0
    //     },
    //     {
    //         "content":"sleep early",
    //         "status":1
    //     }
    // ]);
    return (
       <>
         <ul>
            {todoList.map((item,index) => {
                return (
                    <div  className="todo-list" key={index}>
                        <li className="list-group-item">{item.content}</li>
                        <button type="button" className="btn btn-info"
                            onClick={() =>{
                                dispatch(toggle({index}));
                            }}
                        >{item.status == 0 ?"Pending":"Completed"}</button>
                    </div>
                )
                
            })}

         </ul>
       </>
    )
}

export default TodoList;