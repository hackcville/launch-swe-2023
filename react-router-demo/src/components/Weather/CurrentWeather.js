import { Typography, Box } from "@mui/material";
import {formatDate, formatTemp} from "../../utils/WeatherUtils.js"
function CurrentWeather({current}){
    return (
     <Box>
        <Typography variant='h2'>{formatTemp(current.temp)}</Typography>
        <Typography variant='h5'>{current.weather[0].description.toUpperCase()}</Typography>
        <Typography>{"As of " + formatDate(current.dt, { dateStyle: 'full', timeStyle: 'long' })}</Typography>

     </Box>
    );
}

export default CurrentWeather;