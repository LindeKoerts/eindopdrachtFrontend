import React, {useContext, useEffect, useState} from "react";
import {TempContext} from "../../context/TempContext";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import MetricSlider from "../../components/metricSlider/MetricSlider";
import WeekWeather from "../../components/weekWeather/WeekWeather";
import DayWeather from "../../components/dayWeather/DayWeather";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import FooterResp from "../../components/footerResp/FooterResp";
import NavBarResp from "../../components/navBarResp/NavBarResp";
import {ScreenWidthContext} from "../../context/screenWidthContext";

const apiKey = 'e265816c2efb5c38bf3bc3fe7dfe63d9';

function Eenstad() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [error, toggleError] = useState(false);

    const { kelvinToMetric } = useContext(TempContext);
    const { screenWidth } = useContext(ScreenWidthContext);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    return (
        <section>

        <main className="main-eenstad">

            {screenWidth < 1200 ? <NavBarResp /> : <NavBar />}

            <div>
                <h1 className="header-bike">EEN STAD</h1>
                <h3 className="intro">De weersvoorspelling in jouw omgeving!</h3>
            </div>


            <div className="weather-container">
                <div className="weather-header1">
                    <div className="zoek">
                    <SearchBar setLocationHandler={setLocation}/>
                    {error &&
                    <span className="wrong-location-error">
              Oeps! Deze locatie bestaat niet
            </span>
                    }
                    </div>

                    <span className="location-details">
            {Object.keys(weatherData).length > 0 &&

            <>
                <br/>
                <br/>
                <div className="start">
                <h1 className="city-name">{weatherData.name}</h1>

                <div className="temp">
                    <h1>{kelvinToMetric(weatherData.main.temp)}</h1>
                </div>

                <div className="discription">
                    <h2>{weatherData.weather[0].description}</h2>
                </div>

                <div className="weather-img">
                <DayWeather coordinates={weatherData.coord}/>
                </div>

                </div>

                <div className="six">

                <section className="first-row">
                <h1 className="box"><p>Gevoelstemperatuur:</p>{kelvinToMetric(weatherData.main.feels_like)}</h1>
                <h1 className="box"><p>Vochtigheid:</p>{weatherData.main.humidity}</h1>
                </section>

                <section className="second-row">
                <h1 className="box"><p>Luchtdruk</p>{weatherData.main.pressure}</h1>
                <h1 className="box"><p>Windrichting</p>{weatherData.wind.deg}</h1>
                </section>

                <section className="third-row">
                    <h1 className="box"><p>Intensiteit wind:</p>{weatherData.wind.gust}</h1>
                <h1 className="box"><p>Windkracht</p>{weatherData.wind.speed}</h1>
                </section>

                </div>

                <div className="metric">
                    <MetricSlider/>
                </div>
            </>

            }
          </span>
                </div>

                <section className="week">
                <WeekWeather coordinates={weatherData.coord}/>
                </section>

            </div>
        </main>

            <br/>
            <br/>

            {screenWidth < 950 ? <FooterResp /> : <Footer />}
        </section>
    );
}

export default Eenstad;