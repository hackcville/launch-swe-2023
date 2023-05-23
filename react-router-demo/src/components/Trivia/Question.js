import {useState} from "react"
import Button from '@mui/material/Button';
const HTMLDecoderEncoder = require("html-encoder-decoder");


const Question = (props) => {
  // Create state variables for each question
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState()
  const [allAnswers, setAllAnswers] = useState([]); 

  // optional, just makes syntax shorter
  const data = props.question_data;

  // insert the correct answer into the incorrect answers
  if (allAnswers.length === 0) { // make sure this only happens once
    const answers = [...data.incorrect_answers]  // make a copy of the incorrect answers (best to not modify props)
    const randomSpot = Math.floor(Math.random() * (answers.length + 1))
    answers.splice(randomSpot, 0, data.correct_answer) // randomize position
    setAllAnswers(answers) 
  }

  // When an answer is click, updated state
  const handleClick = (answer) => {
    setIsAnswered(true)
    if (answer === data.correct_answer) {
      setIsCorrect(true)
      props.correct()  // update parent state
    } else {
      setIsCorrect(false)
      props.incorrect()  // update parent state
    }
  }

  // determine question color based on state
  let questionColor = "black";
  if (isAnswered) {
    questionColor = isCorrect? "green" : "red"
  }

  return(
    <div>
      <h2 style={{color: questionColor}}>{HTMLDecoderEncoder.decode(data.question)}</h2>
      {/* {JSON.stringify(data)} */}
      {allAnswers.map((answer)=> <Button variant="outlined" style={{marginLeft: "1em"}} disabled={isAnswered} key={answer} onClick={() => handleClick(answer)}>{HTMLDecoderEncoder.decode(answer)}</Button>)}
      {isAnswered && <p>The correct answer was {HTMLDecoderEncoder.decode(data.correct_answer)}.</p>}
      <br />
    </div>
  )
}

export default Question