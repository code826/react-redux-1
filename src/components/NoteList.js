
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/actions/noteAction";

const NoteList = () =>{
   const noteList =  useSelector((state) =>{
    console.log('state',state.noteReducers);
        return state.noteReducers.noteList;
    });
    const dispatch = useDispatch();

    // const [noteList,setNoteList] = useState([
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
            {noteList.map((item,index) => {
                return (
                    <div  className="todo-list" key={index}>
                        <li className="list-group-item">{item.content}</li>
                        <button type="button" className="btn btn-danger"
                            onClick={() =>{
                               dispatch(deleteNote(index));
                            }}
                        >Delete</button>
                    </div>
                )
                
            })}

         </ul>
       </>
    )
}

export default NoteList;