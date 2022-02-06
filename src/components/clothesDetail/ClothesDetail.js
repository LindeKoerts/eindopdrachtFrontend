import React, { useContext } from "react";
import { TempContext } from "../../context/TempContext";
import smileyMapper from "../../helpers/smileyMapper";

function WeatherDetail({ description, temp, type }) {
    const { kelvinToMetric } = useContext(TempContext);

    return (
        <section className="day-part">
      <span className="icon-wrapper">
        {smileyMapper(type)}
      </span>
            <p className="description">{description}</p>
            <p>{kelvinToMetric(temp)}</p>
        </section>
    );
}

export default WeatherDetail;