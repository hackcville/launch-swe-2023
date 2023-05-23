import { Typography } from "@mui/material";
import {useState, useEffect} from "react";

// Components
import CurrentWeather from "./CurrentWeather.js";
import Options from "./Options.js";
import WeatherDaily from "./WeatherDaily.js";
import WeatherHourly from "./WeatherHourly.js";

// Functions
import {getWeather} from '../../utils/WeatherUtils.js';

function Dashboard({location, position}){

    const [weather, setWeather] = useState(null);
    const [isDaily, setDaily] = useState(true);
    useEffect (() => {
        let ignore = false;
        async function fetchData() {
            const result = await getWeather(position);
        if (!ignore) setWeather(result);
    }
    fetchData();
    return () => { ignore = true; }
    }, [position]);
    console.log(weather)
    return (weather && 
        <>
            <Typography component='h3' variant='h3'> {location} Weather</Typography>
            {/* {weather && JSON.stringify(weather, null, 4)} */}
            <CurrentWeather current={weather.current}/>
            <Options isDaily= {isDaily} changeFormat= {() => setDaily(prevState => !prevState)}/>
            {isDaily ? <WeatherDaily weather={weather.daily}/> : <WeatherHourly weather={weather.hourly}/>}
            {/* <WeatherDaily weather={weather.daily}/> */}
            {/* <WeatherHourly weather={weather.hourly} /> */}
        </>
    )
}

export default Dashboard;