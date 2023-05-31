import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TextMessage from "./TextMessage";

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages").then((response) => setMessages(response.data));
  }, []);
  return (
    <div>
      <Typography variant="h4">Here are the current messages:</Typography>
      <Typography variant="h7">
        Double click on any of the message below to edit them and hit 'Enter'
      </Typography>
      {messages.map((msg) => (
        <TextMessage message={msg} key={msg.id} />
      ))}
      <NewMessage user={user} />
    </div>
  );
}

function NewMessage({ user }) {
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessage = () => {
    console.log(newMessage);
    const newMessageObj = { text: newMessage, username: user };
    axios.post("/messages", newMessageObj);
    setNewMessage("");
  };
  return (
    <>
      <TextField
        value={newMessage}
        label="New message"
        onChange={(e) => setNewMessage(e.target.value)}
      ></TextField>
      <Button variant="contained" onClick={handleNewMessage}>
        Send
      </Button>
    </>
  );
}

export default Chat;
