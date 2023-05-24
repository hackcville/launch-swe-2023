import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { IconButton, Typography, TextField, Button } from "@mui/material";

import { db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useState } from "react";

function Response({ data }) {
  const netVotes = data.upvotes - data.downvotes;
  const [newResponse, setNewResponse] = useState("");
  return (
    <div style={{ display: "flex", flex: "row" }}>
      <div style={{ display: "flex", flex: "row" }}>
        <IconButton aria-label="upvote" size="large" onClick={incrementVote}>
          <ThumbUpIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h6">{netVotes}</Typography>
        <IconButton aria-label="downvote" size="large" onClick={decrementVote}>
          <ThumbDownIcon fontSize="inherit" />
        </IconButton>
      </div>
      <Typography variant="h6">{data.text}</Typography>
    </div>
  );
}

const incrementVote = () => {};
const decrementVote = () => {};
export default Response;
