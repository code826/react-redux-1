import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";
import { addNote } from "../redux/actions/noteAction";

const NoteForm = () =>{
    const [notes,setNotes] = useState("");
    const dispatch = useDispatch();
    
    const handleAddNotes = () =>{
        const text = notes;
        if(!text || text.length == 0){
            alert("Enter Valid Note Item");
            return;
        }
        dispatch(addNote(text));
        setNotes("");
    }
   
    return (
        <>
            <form className="todo-form">
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a notes here" id="notes" value={notes}
                            onChange={(e) =>{
                                setNotes(e.target.value);
                            }}
                        ></textarea>
                        <label htmlFor="notes">Notes</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) =>{
                    e.preventDefault();
                    handleAddNotes();
                }}>Submit</button>
            </form>
        </>
    )
}

export default NoteForm;