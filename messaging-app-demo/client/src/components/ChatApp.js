import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    axios.get("/messages").then((response) => setMessages(response.data));
  }, []);

  const handleNewMessage = () => {
    const newMessageObj = { text: newMessage, username: username };
    axios.post("/messages", newMessageObj);
    setMessages((msg) => [...msg, newMessageObj]);
    setNewMessage("");
  };

  return (
    <>
      <h1>Chat App</h1>
      {messages.map((msg) => (
        <TextMessage message={msg} key={msg.id} />
      ))}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <TextField
        label="Your Text Message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></TextField>
      <Button variant="contained" onClick={handleNewMessage}>
        Send
      </Button>
    </>
  );
}

function TextMessage({ message }) {
  const time = new Date(message?.createdAt?.seconds);
  return (
    <>
      <h5>{message.username}</h5>
      <h6>{time.toString()}</h6>
      <p>{message.text}</p>
    </>
  );
}

export default ChatApp;
