import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css"
import "react-toastify/dist/ReactToastify.css";

function NavBar(){
    const { logout, authState: { isAuth, user} } = useContext(AuthContext);
    const [isHovering, toggleIsHovering] = useState(false);

    const notify = () => toast.error('You have to be logged in to visit this page.');

    return(
        !isAuth ?
        <nav>
            <div className="nav-container">
                <NavLink className="logo" to="/" exact activeClassName="active-link"><h2>#WhatToWear.</h2></NavLink>

                <ul className="nav-links">

                    <li onClick={notify}>
                        <NavLink exact activeClassName="active-link" className="nav-item" to="/opdefiets">Op de fiets</NavLink>
                    </li>

                    <li onClick={notify}>
                        <NavLink exact activeClassName="active-link" className="nav-item" to="/eenstad">Een stad</NavLink>
                    </li>

                    <li>
                        <NavLink exact activeClassName="active-link" className="nav-item" to="/contact">Contact</NavLink>
                    </li>

                    <li>
                        <NavLink exact activeClassName="active-link" className="nav-item" to="/inloggen">Inloggen</NavLink>
                    </li>

                    <li>
                        <NavLink exact activeClassName="active-link" className="register-nav-item" to="/aanmelden">Aanmelden</NavLink>
                    </li>
                        </ul>

            </div>
        </nav>
            :
        <div>
            <nav>
                <div className="nav-container">
                    <NavLink className="logo" to="/" exact activeClassName="active-link"><h2>#WhatToWear.</h2></NavLink>

                    <ul className="nav-links">

                        <li>
                            <NavLink exact activeClassName="active-link" className="nav-item" to="/opdefiets">Op de fiets</NavLink>
                        </li>

                        <li>
                            <NavLink exact activeClassName="active-link" className="nav-item" to="/eenstad">Een stad</NavLink>
                        </li>

                        <li>
                            <NavLink exact activeClassName="active-link" className="nav-item" to="/contact">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink exact activeClassName="active-link" className="nav-item" to="/inloggen">Inloggen</NavLink>
                        </li>

                        <li>
                            <NavLink exact activeClassName="active-link" className="register-nav-item" to="/aanmelden">Aanmelden</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="account"
                     onMouseOver={() => toggleIsHovering(true)}
                     onMouseOut={() => toggleIsHovering(false)}
                >
                    <FaUserAlt />
                    <span className="username">
                        {isHovering ? <span onClick={logout}>Uitloggen</span> : <span>{user.username}</span>}
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;