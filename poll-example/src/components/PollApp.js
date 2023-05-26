import React, { useState, useEffect } from "react";
import Poll from "./Poll";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { TextField, Typography, Button } from "@mui/material";
function PollApp() {
  const [polls, setPolls] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  //www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/
  const addQuestion = async () => {
    const newPoll = {
      question: newQuestion,
      choices: [],
    };
    const docRef = await addDoc(collection(db, "polls"), newPoll);
    setNewQuestion("");
    newPoll.id = docRef.id;
    console.log("Document written with ID: ", docRef.id);
    setPolls((oldArray) => [...oldArray, newPoll]);
  };
  const fetchPolls = async () => {
    await getDocs(collection(db, "polls")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPolls(newData);
      console.log(polls, newData);
    });
  };
  useEffect(() => {
    fetchPolls();
  }, []);
  return (
    <>
      <Typography variant="h1">Poll</Typography>
      <div style={{ display: "flex", width: "75%" }}>
        <TextField
          label="Enter a new poll question"
          variant="standard"
          align="left"
          fullWidth
          onChange={(e) => setNewQuestion(e.target.value)}
          value={newQuestion}
        />
        <Button variant="outlined" onClick={addQuestion}>
          Submit
        </Button>
      </div>
      {polls && polls.map((p) => <Poll poll_information={p} key={p.id} />)}
    </>
  );
}

export default PollApp;
