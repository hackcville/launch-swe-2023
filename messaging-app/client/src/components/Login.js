import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Login({ onSubmit }) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Box sx={{ flexDirection: "column" }}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Box>
        <Box>
          <Button variant="contained" onClick={() => onSubmit(userName)}>
            Log In
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
