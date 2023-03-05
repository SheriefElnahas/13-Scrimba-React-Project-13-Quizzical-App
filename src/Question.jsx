import React from "react";
import "./Question.css";

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
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Question({ choices, questionHeading, answer, checkCorrectAnswer, showResults}) {
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
      buttonsContainer[i].setAttribute("disabled", true);
      e.target.classList.add("right-answer");

    }
  }

  if(showResults()) {
    console.log('do something')
  }

  return (
    <div className="Question">
      <h2>{questionHeading}</h2>
      <div>
        {/* Loop through the choices to create a button for every choice, extract the index to use it as key */}
        {choices.map((choice, index) => {
          return (
            <button onClick={(e) => selectedChoice(e)} key={index}> {choice}</button>);
        })}
      </div>
    </div>
  );
}
