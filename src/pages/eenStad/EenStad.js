import React, {useContext, useEffect, useState} from "react";
import {TempContext} from "../../context/TempContext";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import MetricSlider from "../../components/metricSlider/MetricSlider";
import WeekWeather from "../../components/weekWeather/WeekWeather";
import WeatherDetail from "../../components/weatherDetail/WeatherDetail";
import DayWeather from "../../components/dayWeather/DayWeather";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

const apiKey = 'e265816c2efb5c38bf3bc3fe7dfe63d9';

function Eenstad() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [error, toggleError] = useState(false);

    const { kelvinToMetric } = useContext(TempContext);

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

        <main>

        <NavBar/>

            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    <SearchBar setLocationHandler={setLocation}/>
                    {error &&
                    <span className="wrong-location-error">
              Oeps! Deze locatie bestaat niet
            </span>
                    }

                    <span className="location-details">
            {Object.keys(weatherData).length > 0 &&


            <>
                <br/>
                <br/>
                <h1 className="city-name">{weatherData.name}</h1>

                <div className="discription">
                    <h2>{weatherData.weather[0].description}</h2>
                </div>

                <div className="weather-img">
                <DayWeather coordinates={weatherData.coord}/>
                </div>

                <div className="temp">
                <h1>{kelvinToMetric(weatherData.main.temp)}</h1>
                </div>

                <div className="six">

                <section className="first-row">
                <h1 className="box">{kelvinToMetric(weatherData.main.feels_like)}</h1>
                <h1 className="box">{weatherData.main.humidity}</h1>
                </section>

                <section className="second-row">
                <h1 className="box">{weatherData.main.pressure}</h1>
                <h1 className="box">{weatherData.wind.deg}</h1>
                </section>

                <section className="third-row">
                <h1 className="box">{weatherData.wind.gust}</h1>
                <h1 className="box">{weatherData.wind.speed}</h1>
                </section>

                </div>


            </>
            }
          </span>
                </div>

                <section className="week">
                <WeekWeather coordinates={weatherData.coord}/>
                </section>


                <MetricSlider/>


            </div>
        </main>

            <br/>
            <br/>


    <Footer/>
        </section>
    );
}

export default Eenstad;