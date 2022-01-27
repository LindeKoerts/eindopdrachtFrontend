import React from "react";
import NavBar from "../../components/navBar/NavBar";
import bike from "../../assets/pictures/bike.png";
import Footer from "../../components/footer/Footer";
import staaf from "../../assets/pictures/route.png";
import OpDeFietsWeather from "../../components/opDeFiets/OpDeFietsWeather";
import './OpDeFiets.css';

function OpDeFiets() {

    return (
        <main>

            <article className= "whitebike">

                <NavBar/>
                <img className="fiets" src={bike} alt="grote foto met fiets"/>

                <h2>Op de</h2>
                <img className="route" src={staaf} alt="uitgestippelde route"/>
                <h2>fiets</h2>

            </article>

            <div className="inbetween">
                <br/>
                <br/>

            </div>

            <section className="next">

                <article className="weather-city">

                    <div className="weather-item1">

            <OpDeFietsWeather/>

                    </div>

                </article>

                <article className="weather-city">

                    <div className="weather-item2">

            <OpDeFietsWeather/>

                    </div>

                </article>

            </section>


            <div>
                <h1>#WhatToWear.</h1>
            </div>

            <Footer/>

        </main>



    );
}

export default OpDeFiets;