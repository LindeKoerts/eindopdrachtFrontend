import React, {useContext} from "react";
import './Homepage.css';
import { ScreenWidthContext } from "../../context/screenWidthContext";
import raam from '../../assets/pictures/Homepage_photo.png';
import NavBar from "../../components/navBar/NavBar";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import cloud from "../../assets/pictures/wolken.png";
import home from "../../assets/pictures/goodhome.svg";
import city from "../../assets/pictures/stad.svg";
import whereto from "../../assets/pictures/waarheen.svg"
import weather from "../../assets/pictures/3.svg";
import example from "../../assets/pictures/Naamloos-1.png";
import Footer from "../../components/footer/Footer";
import FooterResp from "../../components/footerResp/FooterResp";
import Button from "../../components/button/Button";
import {Link} from "react-router-dom";


function Homepage(){

    const { screenWidth } = useContext(ScreenWidthContext);

    return(
        <main className="homepage">

            <article className= "white">

                {screenWidth < 950 ? <NavBarResp /> : <NavBar />}

                <div className="start-text">
                    <h1 className="text-resize"> De weerapp die jij</h1>
                    <h2 className="text-resize1"> nodig hebt zodat jij het</h2>
                    <h1 className="text-resize"> NEDERLANDSE WEER</h1>
                    <h2 className="text-resize1">kunt trotseren!!!</h2>

                </div>

                <div className="homepage-text">

                    <p>Ja, je leest het goed! Nooit meer overhit, nat geregend of rood van de hagel op locatie aankomen. <strong>#WhatToWear. </strong>
                        helpt jou overleven in Nederland.</p>

                    <button className="roze"> Aanmelden</button>
                    <button className="roze"> Meer Informatie</button>

                </div>

                <img className="resize1" src={raam} alt="homepage afbeelding"/>

            </article>

            <article className="blue">
                <img className="resize2" src={cloud} alt="wolken met de zon"/>

                <h2 className="heading2">De juiste weerinformatie voor jou!</h2>

                <br/>
                <br/>
                <br/>
                <br/>

                <p className="text2"> Wonend in Nederland krijgen we de gehele dag te maken met veranderend weer. Zo regent het de ene minuut en schijnt de ander minuut de zon. Daarbij is ook nog eens de ene 18 graden niet de andere 18 graden. Lastig dus! Want hoe zorg je ervoor dat je niet een plensbui op je hoofd krijgt in je zomerkleding? Heel simpel! Check voordat je naar buiten gaat eerst #WhattoWear. Hier kun je zien wat voor weer het wordt gedurende de gehele dag! Ben je op een dag op verschillende plekken? Vul dan de Op de fiets in. Zo kom jij niet voor een verassing te staan en ben je aan het eind van de dag droog overgekomen. Ben je al overtuigd? Maak snel een account aan en test het uit!

                    <br/>
                    <br/>
                    <button className="roze">Test het hier!</button>
                </p>

            </article>

            <article className="white2">
                <h2 className="how-to">Hoe werkt het?</h2>

                <div className="row">

                    <aside className="column">
                        <img className="resize3" src={whereto} alt="waarheen"/>
                        <p className="textpicture">Blijf je op 1 plek vandaag? Of ga je op de fiets? </p>
                    </aside>

                    <aside className="column">
                        <img className="resize3" src={city} alt="stad"/>
                        <p className="textpicture">Geef jouw plaats(en) door!</p>
                    </aside>

                    <aside className="column">
                        <img className="resize3" src={weather} alt="de weersvoorspelling"/>
                        <p className="textpicture">Bekijk de weervoorspelling en de kledingtip!</p>
                    </aside>

                    <aside className="column">
                        <img className="resize3" src={home} alt="voorbereid van huis"/>
                        <p className="textpicture">Ga voorbereid van huis! </p>

                    </aside>

                </div>

            </article>

            <article className="blue2">


                <div className="icon">

                    <h2>Het gebruik van Icoontjes! </h2>

                    <p>Aan de hand van jouw ingevulde gegevens laten wij de weersvoorspelling van die  dag zien. Aan de hand van verschillende factoren zorgen wij ervoor dat jij de juiste kledingadviezen krijgt. Dit doen wij aan de hand van icoontjes. De icoontjes geven aan wat jij die dag moet meenemen en geeft een suggestie wat je aan kan doen. Verschillende icoontjes hebben verschillende betekenissen en daarom  leggen wij je hier uit wat welk icoontje betekend zodat je echt goed voorbereid de deur uit gaat! Nog vragen? Je kunt altijd contact met ons opnemen:  </p>

                    <br/>
                    <button className="roze"> Contact </button>
                    <br/>
                    <br/>

                    <p> Nu hoor ik je denken “Waarom niet te koud gekleed of te warm gekleed?”Niet te warm betekend dat die dag de zon niet veel schijnt maar soms wel door komt dus een beetje kleding is fijn, denk bijvoorbeeld aan laagjes. Wanneer de zon dan toch doorkomt dan ben je voorbereid! Hetzelfde geldt voor niet te koud. De temperatuur is verradelijk. Het is dan wel 21 graden maar er staat sterke wind dus als je dan te weinig aan hebt, vat je kou. </p>

                </div>

                <img className="resize4" src={example} alt="wat betekenen de icoontjes"/>

            </article>

            <article>
                {screenWidth < 950 ? <FooterResp /> : <Footer />}

            </article>


</main>



    );

}

export default Homepage;
