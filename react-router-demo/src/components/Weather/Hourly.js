import { Paper, Box, Typography, Avatar } from "@mui/material";
import {formatDate, formatTemp} from "../../utils/WeatherUtils.js"


function getImage (icon, alt ='no alternative text'){
    return <Avatar src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt={alt}/>
}
function Hourly({hourWeather, isNow}){
    return (
        <Paper>
            <Box display="flex" justifyContent='space-evenly'>
            <Typography variant='h5'>{isNow? "Now":formatDate(hourWeather.dt, { hour: 'numeric'})}</Typography>
                {getImage(hourWeather.weather[0].icon, hourWeather.weather[0].description)}
                {/* {getDayRange(min, max, avg)} */}
                <Typography variant='h5'>{formatTemp(hourWeather.temp)}</Typography>
            </Box>
        </Paper>
    );
}
export default Hourly;