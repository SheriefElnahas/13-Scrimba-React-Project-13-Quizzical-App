// Question.jsx
import React from 'react';
import './Question.css';

// Helper Function To Shuffle An Array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function Question({ choices, questionHeading, answer, checkCorrectAnswer, showResults }) {
  // Shuffle The Array Of Choices to change the position of the correct answer from 3th index to a random index
  shuffle(choices);

  function selectedChoice(e) {
    // If selected choice is the correct answer - Then send true to checkCorrectAnswer function within the parent to increase the score
    if (e.target.innerHTML.trim() === answer) {
      checkCorrectAnswer(true);
    }

    // Extract all the buttons
    const buttonsContainer = e.target.parentElement.children;

    // Loop through the buttons
    for (let i = 0; i < buttonsContainer.length; i++) {
      // Add disabled attribute to all the buttons then change the background color of the selected choice
      buttonsContainer[i].setAttribute('disabled', true);
      e.target.classList.add('right-answer');
    }
  }

  if (showResults()) {
    console.log('do something');
  }

  return (
    <div className="Question">
      <h2>{questionHeading}</h2>
      <div>
        {/* Loop through the choices to create a button for every choice, extract the index to use it as key */}
        {choices.map((choice, index) => {
          return (
            <button onClick={(e) => selectedChoice(e)} key={index}>
              {' '}
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// QuizPage
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
