import { Box, Typography } from "@mui/material";
import Hourly from "./Hourly";

function WeatherHourly({weather}){
    return (
    <Box padding={10}>
        <Typography variant='h5' textAlign='left'>Hourly Forecast</Typography>
        {weather.map((data, index)=> <Hourly hourWeather={data} isNow={index === 0} key={data.dt}/> )}
    </Box>
    );
}

export default WeatherHourly;