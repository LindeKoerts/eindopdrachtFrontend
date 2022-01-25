import React, { useContext } from 'react';
import { ScreenWidthContext } from "../../context/screenWidthContext";

import NavBar from "../../components/navBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import NavBarResp from "../../components/navBarResp/NavBarResp";

import styles from './Inloggen.css';

const LoginPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <>
            { screenWidth < 950 ? <NavBarResp /> : <NavBar /> }

            <div className={styles['login-page']}>
                <section className={styles['form-container']}>
                    <LoginForm />
                </section>

                <section className={styles['img-container']}>
                </section>
            </div>
        </>

    );
}

export default LoginPage;