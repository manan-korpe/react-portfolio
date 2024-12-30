import "./assets/css/header.css";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="hd-main">
            <div className="header-main">
                <Link to="/">About</Link>
                <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </div>
    )
}

export default Header;