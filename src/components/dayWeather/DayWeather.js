import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDetail from '../weatherDetail/WeatherDetail';
import createTimeString from '../../helpers/createTimeString';
import '../dayWeather/DayWeather.css'

const apiKey = 'e265816c2efb5c38bf3bc3fe7dfe63d9';

function DayWeather({ coordinates }) {
    const [forecasts, setForecasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,daily&appid=${apiKey}`);
                setForecasts([
                    result.data.hourly[3],
                    result.data.hourly[5],
                    result.data.hourly[7],
                ]);
                console.log(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }

            toggleLoading(false);
        }

        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);

    return (

        <div className="tab-wrapper">

            <div className="chart">
                {forecasts.map((forecast) => {
                    return <WeatherDetail
                        key={forecast.dt}
                        temp={forecast.temp}
                        type={forecast.weather[0].main}
                        description={forecast.weather[0].description}
                    />
                })}
            </div>


            <div className="legend">
                {forecasts.map((forecast) => {
                    return <span key={`${forecast.dt}-timestamp`}>{createTimeString(forecast.dt)}</span>
                })}
            </div>

            {error && <span>Het ophalen van de voorspellingen is mislukt. Probeer het opnieuw.</span>}
            {loading && (<span>Loading...</span>)}

        </div>





    );
}

export default DayWeather;