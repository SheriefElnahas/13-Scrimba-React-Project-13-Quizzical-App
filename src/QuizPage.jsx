import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";

export default function QuizPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quizResult, setQuizResult] = useState({
    quizNum : 4,
    score: 0
  });

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=4&category=11&difficulty=easy&type=multiple").then((response) => {
        setQuestions(response.data.results);    
        setLoading(true);    
      });
  }, []);


  // This function will recieve true or false from Question component to increase the score if we recieved true from the child
  function checkCorrectAnswer(answerIsCorrect) {
    if(answerIsCorrect) {

      setQuizResult((oldValue) => {
        return {
          ...oldValue,
          score : oldValue.score + 1
        }
      })
    }
  }

  function showResults() {
    // console.log('you should access the question component');
    return true;
  }

  return (
    <div className="QuizzPage">
      {loading && questions.map((question) => { 
        // Merge incorrect answers & correct answers into an array to pass this to the question component
        const choices = [ ...question.incorrect_answers, question.correct_answer];

        return (
          <Question checkCorrectAnswer={checkCorrectAnswer}  key={question.correct_answer}  showResults={showResults}
          choices={choices} questionHeading={question.question} answer={question.correct_answer} /> ) })}

          
          <button onClick={showResults}  className="primary-button">Show Results</button>
          <p>You scored {quizResult.score}/{quizResult.quizNum} correct answers</p>
   
    </div>
  );
}
