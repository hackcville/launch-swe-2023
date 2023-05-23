import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Daily from "./Daily";
function WeatherDaily({weather}){
    return (
        <Box padding={10}>
            <Typography variant='h5' textAlign='left'>Daily Forecast</Typography>
            {weather.map((data, index)=> <Daily dayWeather={data} isToday={index === 0} key={data.dt}/> )}
        </Box>
    );
}

export default WeatherDaily;