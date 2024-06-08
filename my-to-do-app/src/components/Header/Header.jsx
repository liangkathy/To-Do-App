import { LuListTodo } from "react-icons/lu"; 
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from "../../contexts/DebugContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Header.css'

const Header = ({count}) => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)
    return (
        <header className={`header header-${theme} ${theme} ${debug}`} id="header">
            <div className="logo" id="logo-link"><Link to="/">ToDo</Link></div>
            <NavBar />
            
            <div className="to-do-icon">
                <LuListTodo size={"3em"}/>
                {count > 0 && <span className="list-count">{count}</span>}
            </div>
            
        </header>
    )
}

export default Header;