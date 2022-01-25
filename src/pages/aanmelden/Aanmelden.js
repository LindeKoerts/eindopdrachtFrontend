import React, { useContext } from 'react';
import { ScreenWidthContext } from "../../context/screenWidthContext";

import NavBar from "../../components/navBar/NavBar";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import RegisterForm from "../../components/registerForm/RegisterForm";

import styles from './Aanmelden.css';

const RegisterPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <>
            {screenWidth < 950 ? <NavBarResp /> : <NavBar/>}

            <div className={styles['register-page']}>
                <section className={styles['img-container']}>
                </section>

                <section className={styles['form-container']}>
                    <RegisterForm />
                </section>
            </div>
        </>

    );
}

export default RegisterPage;