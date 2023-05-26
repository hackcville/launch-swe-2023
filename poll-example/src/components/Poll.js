import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Options from "./Options";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Poll({ poll_information }) {
  const [choices, setChoices] = useState(poll_information.choices);
  // const pollRef = doc(db, "polls", poll_information.id);
  const handleChoice = async (text) => {
    const newChoice = { text: text, downvotes: 0, upvotes: 0 };
    const docRef = await addDoc(
      collection(db, "polls", poll_information.id, "choices"),
      newChoice
    );
    newChoice.id = docRef.id;
    console.log("Document written with ID: ", docRef.id);
    setChoices((oldArray) => [...oldArray, newChoice]);
  };
  return (
    <>
      <Typography variant="h4" align="left">
        {poll_information.question}
      </Typography>
      <Options
        choices={choices}
        onAddChoice={handleChoice}
        question_id={poll_information.id}
      />
    </>
  );
}

export default Poll;
