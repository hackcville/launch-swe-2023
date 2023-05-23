import Question from "./Question.js"
import {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
function TriviaApp() {
  const [triviaData, setTriviaData] = useState();
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const percentage = totalAnswered !== 0? Math.round(totalCorrect/totalAnswered * 100) : 0;

  const incrementCorrect = () => {
    setTotalCorrect(totalCorrect + 1)
    setTotalAnswered(totalAnswered + 1)
  }
  const incrementIncorrect = () => {
    setTotalAnswered(totalAnswered + 1)
  }

  const generateQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((data) => setTriviaData(data.results))
  }

  useEffect(() => {
    generateQuestions()
  }, [])

  if (triviaData) {
    return (
      <div className="App">
        <Helmet>
          <title>Trivia App</title>
        </Helmet>
        <h1>Trivia</h1>
        <p>Your score: {totalCorrect} / {totalAnswered} ({percentage}%)</p>
        <button onClick={generateQuestions}>New Questions</button>
        {triviaData.map((question) => <Question question_data={question} key={question.question} correct={incrementCorrect} incorrect={incrementIncorrect} />)}   
      </div>
    );
  } else {
    return(<div className="App"><h1>Trivia</h1><h2>Loading...</h2></div>)
  }

}

export default TriviaApp;
