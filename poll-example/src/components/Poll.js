import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Options from "./Options";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

function Poll({ poll_information }) {
  const [choices, setChoices] = useState(poll_information?.choices);
  const pollRef = doc(db, "polls", poll_information.id);
  const handleChoice = async (text) => {
    const newChoice = { text: text, downvotes: 0, upvotes: 0 };
    await updateDoc(pollRef, {
      choices: arrayUnion(newChoice),
    });
    setChoices((oldArray) => [...oldArray, newChoice]);
  };
  return (
    <>
      <Typography variant="h4" align="left">
        {poll_information.question}
      </Typography>
      <Options choices={poll_information.choices} onAddChoice={handleChoice} />
    </>
  );
}

export default Poll;
