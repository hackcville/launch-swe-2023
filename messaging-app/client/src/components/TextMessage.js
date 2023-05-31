import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Item(props) {
  return <Box>{props.children}</Box>;
}
function TextMessage({ message }) {
  const [editText, setEditText] = useState(false);
  const [messageText, setMessageText] = useState(message.text);
  const [isEdited, setIsEdited] = useState(message.isEdited);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newText = event.target.value;
      if (newText !== messageText) setIsEdited(true);
      setMessageText(newText);
      updateText(newText);
      setEditText(false);
    }
  };
  const updateText = (newText) => {
    axios.put(`/messages/${message.id}`, { text: newText });
  };
  const messageTime = new Date(message?.createdAt?.seconds);
  return (
    <Box sx={{ flexDirection: "column" }}>
      <Item>
        <Typography variant="h6">{message.username}</Typography>
      </Item>
      <Item>
        <Typography variant="h7">{messageTime.toString()}</Typography>
      </Item>
      <Item>
        {editText ? (
          <EditMessage text={messageText} onKeyDown={handleKeyDown} />
        ) : (
          <Message
            text={messageText}
            onDoubleClick={() => setEditText(true)}
            isEdited={isEdited}
          />
        )}
      </Item>
    </Box>
  );
}

function EditMessage({ text, onKeyDown }) {
  return <TextField onKeyDown={onKeyDown} defaultValue={text}></TextField>;
}

function Message({ text, onDoubleClick, isEdited }) {
  return (
    <Typography onDoubleClick={onDoubleClick}>
      {text + (isEdited ? " (edited)" : "")}
    </Typography>
  );
}

export default TextMessage;
export { EditMessage, Message };
