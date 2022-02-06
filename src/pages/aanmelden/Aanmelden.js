import React, { useContext } from "react";
import { ScreenWidthContext } from "../../context/screenWidthContext";
import NavBar from "../../components/navBar/NavBar";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import RegisterForm from "../../components/registerForm/RegisterForm";
import './Aanmelden.css';

const RegisterPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <section className="white-aanmelden">

            {screenWidth < 950 ? <NavBarResp /> : <NavBar/>}

            <div className="register-page">
                <section className="form-container">
                    <RegisterForm />
                </section>
            </div>

        </section>
    );
}

export default RegisterPage;