import React from "react";
import "./Footer.css"
import {Link} from "react-router-dom";

function Footer(){

    return(

        <article className="footer">

            <div className="row">

                <aside className="column2">
                    <h3 className="header">Over ons</h3>
                    <p className="footer-text">Met ons systeem zorg jij ervoor dat je nooit meer nat geregend, oververhit of te koud naar buiten gaat. De perfecte voorbereiden voor jou buitentrip. En dat is Nederland natuurlijk geen overbodige luxe. </p>
                    <button className="button">
                        <Link to='/aanmelden'>Aanmelden</Link>
                       </button>
                </aside>

                <aside className="column2">
                    <h3 className="header">Contact</h3>
                    <p className="footer-text">Met ons systeem zorg jij ervoor dat je nooit meer nat geregend, oververhit of te koud naar buiten gaat. De perfecte voorbereiden voor jou buitentrip. En dat is Nederland natuurlijk geen overbodige luxe. </p>
                </aside>

                <aside className="column2">
                    <h3 className="header">Get in touch</h3>
                    <p className="footer-text">Deel jouw ultieme #WhatToWear. moment via social media en gebruik (hoe kan het ook anders) de #WhatToWear.! We kijken uit naar jullie online kiekjes.</p>
                </aside>

            </div>

        </article>
    )
}

export default Footer;