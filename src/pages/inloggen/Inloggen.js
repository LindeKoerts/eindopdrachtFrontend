import React, { useContext } from "react";
import { ScreenWidthContext } from "../../context/screenWidthContext";
import inlog from "../../assets/pictures/img.png";
import NavBar from "../../components/navBar/NavBar";
import LoginForm from "../../components/loginForm/LoginForm";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import "./Inloggen.css";

const LoginPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <main>

        <section className="inlog">
            { screenWidth < 950 ? <NavBarResp /> : <NavBar /> }

            <img className="resizeinlog" src={inlog} alt="inloggen afbeelding"/>

            <div className="login-page">
                <section className="form-container'">
                    <LoginForm />
                </section>

                <section className="img-container">
                </section>
            </div>

        </section>
        </main>
    );
}

export default LoginPage;