import { Box, Button } from "@mui/material";

function Options({isDaily, changeFormat}){
    return <Box>
        <Button variant="contained" onClick={changeFormat}>{isDaily?"See Hourly":"See Daily"}</Button>
    </Box>;
}

export default Options;