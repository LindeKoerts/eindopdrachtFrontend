import React from "react";
import { ReactComponent as Sunny } from "../assets/icons/Zon.svg";
import { ReactComponent as Rain } from "../assets/icons/Rain.svg";
import { ReactComponent as Clouds } from "../assets/icons/Clouds.svg";
import { ReactComponent as Snow } from "../assets/icons/Snow.svg";
import { ReactComponent as Wind } from "../assets/icons/Wind.svg";
import { ReactComponent as Drizzle } from "../assets/icons/Drizzle.svg";
import { ReactComponent as Mist } from "../assets/icons/Mist.svg";
import { ReactComponent as Hail } from "../assets/icons/Hail.svg";
import { ReactComponent as Storm } from "../assets/icons/Storm.svg";

function iconMapper(weatherType) {
    switch (weatherType){
        case 'Clear':
            return <Sunny/>;
        case 'Clouds':
            return <Clouds/>;
        case 'Drizzle':
            return <Drizzle/>;
        case 'Rain':
            return <Rain/>;
        case 'Snow':
            return <Snow/>;
        case 'Mist':
            return <Mist/>
        case 'Haze':
            return <Mist/>
        case 'Smoke':
            return <Mist/>
        case 'Fog':
            return <Mist/>
        case 'Wind':
            return <Wind/>
        case 'Hail':
            return <Hail/>
        case 'Storm':
            return <Storm/>
        default:
            return <Wind/>;
    }
}

export default iconMapper;