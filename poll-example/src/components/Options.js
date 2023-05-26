import React from "react";
import Response from "./Response";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function Options({ choices, onAddChoice, question_id }) {
  const [newResponse, setNewResponse] = useState("");
  const addResponse = async () => {
    await onAddChoice(newResponse);
    setNewResponse("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {choices.map((choice) => (
        <Response data={choice} question_id={question_id} key={choice.text} />
      ))}
      <div style={{ display: "flex" }}>
        <TextField
          onChange={(e) => setNewResponse(e.target.value)}
          value={newResponse}
          size="small"
        />
        <Button variant="outlined" onClick={addResponse} size="small">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Options;
