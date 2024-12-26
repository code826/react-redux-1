import { Link, NavLink } from "react-router-dom";

const Navbar = (props) =>{
    // const {setCurrentPage} = props;
    return (
        <nav>
            <span>
                <NavLink  className={({ isActive }) =>  isActive ? "active" : ""} to="/">Home</NavLink>
            </span>
            <span>
                <NavLink className={({ isActive }) =>  isActive ? "active" : ""}  to="/todo" >Todo</NavLink>
            </span>
            <span>
                <NavLink className={({ isActive }) =>  isActive ? "active" : ""} to="/notes">Notes</NavLink>
            </span>
          
           
        </nav>
    );
}

export default Navbar;