import { Provider } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import store from "../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Layout from "./Layout";


function App() {

 const router =  createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<><TodoForm/><TodoList/></>
        },
        {
          path:"todo",
          element:<><TodoForm/><TodoList/></>
        },
        {
          path:"notes",
          element:<><NoteForm/><NoteList/></>
        }
      ]
    }
  ])
  return (
   <>
   <Provider store={store}>
    <RouterProvider router={router}/>
   </Provider>

   </>
  );
}

export default App;
