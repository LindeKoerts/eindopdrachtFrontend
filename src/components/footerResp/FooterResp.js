import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


function FooterResp() {

    return (
        <article className="footerResp">

            <div className="rowsResp">

                <aside className="column2Resp">
                    <h3 className="headerResp">Over ons</h3>
                    <p className="footer-textResp">Met ons systeem zorg jij ervoor dat je nooit meer nat geregend, oververhit of te koud naar buiten gaat. De perfecte voorbereiden voor jou buitentrip. En dat is Nederland natuurlijk geen overbodige luxe. </p>
                    <button className="buttonResp">Aanmelden</button>
                </aside>

                <aside className="column2Resp">
                    <h3 className="headerResp">contact</h3>
                    <p className="footer-textResp">Met ons systeem zorg jij ervoor dat je nooit meer nat geregend, oververhit of te koud naar buiten gaat. De perfecte voorbereiden voor jou buitentrip. En dat is Nederland natuurlijk geen overbodige luxe. </p>
                </aside>

                <aside className="column2Resp">
                    <h3 className="headerResp">Get in touch</h3>
                    <p className="footer-textResp">Deel jouw ultieme #WhatToWear. moment via social media en gebruik (hoe kan het ook anders) de #WhatToWear.! We kijken uit naar jullie online kiekjes.</p>
                </aside>

            </div>

            <div
            >
                <HiOutlineMenuAlt4 size={25}/>
            </div>

        </article>




    );
}

export default FooterResp;