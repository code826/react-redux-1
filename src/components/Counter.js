import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

const Counter = () =>{
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterReducers.counter);
    return(
        <div>
            <h1>Counter Value : {counter}</h1>
            <button onClick={() =>{
                dispatch(increment())
            }}>Increment</button>
            <button onClick={() =>{
                dispatch(decrement())
            }}>Decrement</button>
            <button onClick={() =>{
                dispatch(reset())
            }}>Reset</button>

        </div>
    )
}

export default Counter;