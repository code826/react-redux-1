import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTodoStatus } from "../redux/actions/todoAction";

const TodoList = () =>{
   const todoList =  useSelector((state) =>{
        return state.todoReducers.todoList;
    });
    const dispatch = useDispatch();

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
                                dispatch(toogleTodoStatus(index));
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