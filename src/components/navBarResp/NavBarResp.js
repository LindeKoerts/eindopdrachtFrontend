import React, {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {AuthContext} from "../../context/AuthContext";
import {toast} from "react-toastify";
import "./NavBarResp.css"

function NavBarResp() {
    const { logout, authState: { isAuth} } = useContext(AuthContext);
    const [showMenu, toggleShowMenu] = useState(false);

    const toggleNav = () => toggleShowMenu(!showMenu);

    const notify = () => toast.error("Je moet ingelogd zijn om deze pagina te kunnen bezoeken.");

    return (
        <nav className="nav">
            <NavLink className="logo-link" exact to="/">
                <h1 className="logo">#WhatToWear.</h1>
            </NavLink>

            {
                showMenu &&
                (!isAuth ?
                    <ul className="nav-items">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/opeenfiets">Op de fiets</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/eenstad"> Een stad</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/contact">Contact</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/aanmelden">Aanmelden</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/inloggen">Inloggen</NavLink></li>
                    </ul>
                    :
                    <ul className="nav-items">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/opeenfiets">Op een fiets</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/eenstad">Een stad</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/contact">contact</NavLink></li>
                        <li className="nav-item" onClick={logout}><NavLink className="nav-link" activeClassName="active-nav-item" exact to="/inloggen">Log Out</NavLink></li>
                    </ul>)
            }


            <div
                className="hamburger"
                onClick={toggleNav}
            >
                <HiOutlineMenuAlt4 size={25}/>
            </div>
        </nav>
    );
}

export default NavBarResp;