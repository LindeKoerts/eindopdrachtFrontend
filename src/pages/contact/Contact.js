import React, { useContext } from 'react';
import NavBar from "../../components/navBar/NavBar";
import {ScreenWidthContext} from "../../context/screenWidthContext";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import Email from '../../assets/pictures/Email.png'
import Phone from '../../assets/pictures/Phone.png'
import Contactpage from '../../assets/pictures/contactpage.png'
import FooterResp from "../../components/footerResp/FooterResp";
import Footer from "../../components/footer/Footer";
import './Contact.css';
import {Link} from "react-router-dom";

function Contact(){

    const { screenWidth } = useContext(ScreenWidthContext);


    return(

        <section>

            <article className="white-contact">

            <div>
                {screenWidth < 1200 ? <NavBarResp /> : <NavBar />}
            </div>

            <article>
                <h1 className="header-contact">CONTACT</h1>
                <h3 className="intro-contact">Vragen? werkt er iets niet? Heb je fantastische ideeen? Samen sparren? Of gewoon even bijkletsen. Neem contact met ons op!</h3>

                <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                <h2 className="nummer">088 088 5234</h2>

                <img className="email" src={Email} alt="email icoon"/>
                <h2 className="mail"> info@whattowear.nl</h2>

                <img className="contact" src={Contactpage} alt="illustratie contact page"/>

            </article>
                    <button className="roze-contact">
                        <Link to='/aanmelden'>Aanmelden</Link>
                    </button>


                <article className="contact-form">


                </article>




            </article>

            <br/>
            <br/>

            <div>
                {screenWidth < 950 ? <FooterResp /> : <Footer />}
            </div>



        </section>



    )
}



export default Contact;