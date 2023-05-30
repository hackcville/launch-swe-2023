import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chat from "./Chat";
import Login from "./Login";
function ChatApp() {
  const [user, setUser] = useState("");
  return (
    <>
      <Typography variant="h1">Messaging App</Typography>
      {user ? <Button onClick={() => setUser("")}>Log Out</Button> : null}
      {user ? (
        <Chat user={user} onLogOut={() => setUser("")} />
      ) : (
        <Login onSubmit={(val) => setUser(val)} />
      )}
    </>
  );
}

export default ChatApp;
