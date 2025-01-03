import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";
import { add } from "../redux/todoSlice";

const TodoForm = () =>{
    const [todoInput,setTodoInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () =>{
        const text = todoInput;
        if(!text || text.length == 0){
            alert("Enter Valid Todo Item");
            return;
        }
        dispatch(add({text:text}));
        setTodoInput("");
    }
    return (
        <>
            <form className="todo-form">
                <div className="mb-3">
                    <label htmlFor="todo-input" className="form-label">Todo</label>
                    <input type="text" className="form-control" id="todo-input" value={todoInput}
                        onChange={(e) =>{
                            setTodoInput(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) =>{
                    e.preventDefault();
                    handleAddTodo();
                }}>Submit</button>
            </form>
        </>
    )
}

export default TodoForm;