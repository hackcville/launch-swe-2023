import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { IconButton, Typography, TextField, Button } from "@mui/material";

import { db } from "../firebase";
import { doc, increment, updateDoc } from "firebase/firestore";

function Response({ data, question_id }) {
  const [votes, setVotes] = useState(data.upvotes - data.downvotes);
  // 0 means not clicked, 1 means upvote, -1 means downvote
  const [userVote, setUserVote] = useState(0);
  const responseRef = doc(db, "polls", question_id, "choices", data.id);

  const incrementVote = async () => {
    await updateDoc(responseRef, {
      upvotes: increment(1),
    });
    setVotes(votes + 1);
    setUserVote(1);
  };
  const decrementVote = async () => {
    await updateDoc(responseRef, {
      upvotes: increment(-1),
    });
    setVotes(votes - 1);
    setUserVote(-1);
  };
  return (
    <div style={{ display: "flex", flex: "row" }}>
      <div style={{ display: "flex", flex: "row" }}>
        <IconButton
          aria-label="upvote"
          size="large"
          onClick={incrementVote}
          disabled={userVote === 1}
        >
          <ThumbUpIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h6">{votes}</Typography>
        <IconButton
          aria-label="downvote"
          size="large"
          onClick={decrementVote}
          disabled={userVote === -1}
        >
          <ThumbDownIcon fontSize="inherit" />
        </IconButton>
      </div>
      <Typography variant="h6">{data.text}</Typography>
    </div>
  );
}

export default Response;
