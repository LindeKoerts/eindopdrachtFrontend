import React from "react";

import { ReactComponent as Storm } from "../assets/smiley/Sjaal.svg";
import {ReactComponent as Sunny} from "../assets/smiley/sun.svg";
import {ReactComponent as Drizzle} from "../assets/smiley/drizzle.svg";
import {ReactComponent as Rain} from "../assets/smiley/rain.svg";
import {ReactComponent as Snow} from "../assets/smiley/snow.svg";
import {ReactComponent as Mist} from "../assets/smiley/clouds.svg";
import {ReactComponent as Wind} from "../assets/smiley/wind.svg";
import {ReactComponent as Hail} from "../assets/smiley/hail.svg";
import {ReactComponent as Smoke} from "../assets/smiley/smoke.svg";
import {ReactComponent as Haze} from "../assets/smiley/haze.svg";
import {ReactComponent as Fog} from "../assets/smiley/fog.svg";



function smileyMapper(weatherType) {
    switch (weatherType){
        case 'Clear':
            return <Sunny/>;
        case 'Drizzle':
            return <Drizzle/>;
        case 'Rain':
            return <Rain/>;
        case 'Snow':
            return <Snow/>;
        case 'Mist':
            return <Mist/>
        case 'Haze':
            return <Haze/>
        case 'Smoke':
            return <Smoke/>
        case 'Fog':
            return <Fog/>
        case 'Wind':
            return <Wind/>
        case 'Hail':
            return <Hail/>
        case 'Storm':
            return <Storm/>
        case 'Clouds':
            return <Mist/>;
        default:
            return <Mist/>;
    }
}

export default smileyMapper;