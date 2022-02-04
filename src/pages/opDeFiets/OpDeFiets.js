import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar";
import bike from "../../assets/pictures/bike.png";
import Footer from "../../components/footer/Footer";
import staaf from "../../assets/pictures/route.png";
import OpDeFietsWeather from "../../components/opDeFiets/OpDeFietsWeather";
import './OpDeFiets.css';
import NavBarResp from "../../components/navBarResp/NavBarResp";
import {ScreenWidthContext} from "../../context/screenWidthContext";
import FooterResp from "../../components/footerResp/FooterResp";

function OpDeFiets() {

    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <main>

            <article className= "whitebike">

                {screenWidth < 1200 ? <NavBarResp /> : <NavBar />}

                <h1 className="header-bike">OP DE FIETS</h1>
                <h3 className="intro">Of natuurlijk met de auto, lopend of de step, het kan allemaal. Vul hieronder in waar jij naar toe gaat!</h3>

                <img className="fiets" src={bike} alt="grote foto met fiets"/>

            </article>

            <ul className="next">

                <li className="weather-city">

                    <div className="weather-item1">

            <OpDeFietsWeather/>

                    </div>

                </li>

                <li className="weather-city">

                    <div className="weather-item2">

            <OpDeFietsWeather/>

                    </div>

                </li>

            </ul>



           <div className="footer1">

            </div>

                {screenWidth < 950 ? <FooterResp /> : <Footer />}

        </main>



    );
}

export default OpDeFiets;