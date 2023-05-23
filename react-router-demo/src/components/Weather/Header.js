import { TextField, Typography, FormControl, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

const SearchButton = () => {
    return <IconButton type="submit" value="submit">
        <SearchIcon />
    </IconButton>
}

function Header({onLocationSubmit}){
    const [userInput, setUserInput] = useState();
    const onChange = (e) => {
        setUserInput(e.target.value);
      };
      const onSubmit = (e) => {
          e.preventDefault();
          if(userInput !== null){
            onLocationSubmit(userInput);
          }
      }
      const getCurrentLocation = (e) => {
        e.preventDefault();
        if(userInput !== null){
          onLocationSubmit(userInput);
        }
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant='h1' component='h1'> Weather Forecast </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
                <form onSubmit={onSubmit} >
                    <Box sx={{width: '20vw'}}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <TextField label="Type City Name or Zip Code" variant="outlined" size='small' onChange={onChange} InputProps={{endAdornment: <SearchButton />}}> {userInput}</TextField>
                        </FormControl>
                    </Box>
                </form>
                <form onSubmit={getCurrentLocation} >
                    <Box sx={{width: '20vw'}}>
                        <Button variant='outlined'>Use Current Location</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Header;