import { Link } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className= "nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;