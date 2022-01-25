import React, {useContext, useState} from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {AuthContext} from "../../context/AuthContext";
import {toast} from "react-toastify";

import styles from './NavBarResp.css';

function NavBarResp() {
    const { logout, authState: { isAuth} } = useContext(AuthContext);
    const [showMenu, toggleShowMenu] = useState(false);

    const toggleNav = () => toggleShowMenu(!showMenu);

    const notify = () => toast.error('You have to be logged in to visit this page.');

    return (
        <nav className={styles.nav}>
            <NavLink className={styles['logo-link']} exact to='/'>
                <h1 className={styles.logo}>Let's Cook</h1>
            </NavLink>

            {
                showMenu &&
                (!isAuth ?
                    <ul className={styles['nav-items']}>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/"><h3>#WhatToWear.</h3></NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/opeenfiets">Op de fiets</NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/eenstad"> Een stad</NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/contact">Contact</NavLink></li>
                        <li onClick={notify} className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/aanmelden">Aanmelden</NavLink></li>
                        <li onClick={notify} className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/inloggen">Inloggen</NavLink></li>
                    </ul>
                    :
                    <ul className={styles['nav-items']}>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/"><h3>#WhatToWear</h3></NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/opeenfiets">Op een fiets</NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/eenstad">Een stad</NavLink></li>
                        <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/contact">contact</NavLink></li>
                        <li className={styles['nav-item']} onClick={logout}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/inloggen">Log Out</NavLink></li>
                    </ul>)
            }


            <div
                className={styles.hamburger}
                onClick={toggleNav}
            >
                <HiOutlineMenuAlt4 size={25}/>
            </div>
        </nav>
    );
}

export default NavBarResp;