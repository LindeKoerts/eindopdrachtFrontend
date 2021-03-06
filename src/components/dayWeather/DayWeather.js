import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDetail from '../weatherDetail/WeatherDetail';
import createTimeString from '../../helpers/createTimeString';
import './DayWeather.css'
import ClothesDetail from "../clothesDetail/ClothesDetail";

const apiKey = 'Meegeleverde API KEY hier invullen!';

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
                        type={forecast.weather[0].main}
                    />

                })}
            </div>

            <div className="chart1">
                <div>
                <h2 className="kleur">#WhatToWear. ->  </h2>
            </div>
                {forecasts.map((forecast) => {
                    return <ClothesDetail
                        type={forecast.weather[0].main}
                    />

                })}
            </div>

            <div className="legend">
                {forecasts.map((forecast) => {
                    return <span key={`${forecast.dt}-timestamp`}>{createTimeString}</span>
                })}
            </div>

            {error && <span>Het ophalen van de voorspellingen is mislukt. Probeer het opnieuw.</span>}
            {loading && (<span>Loading...</span>)}
        </div>

    );
}

export default DayWeather;