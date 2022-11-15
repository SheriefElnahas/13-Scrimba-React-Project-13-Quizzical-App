import React from 'react';
import './StartQuiz.css';

export default function StartQuiz(props) {
  return (
    <div className='StartQuiz'>
        <h1>Quizzical</h1>
        <p>Test your knowlege by answering these questions</p>
        <button onClick={() => props.start()}>Start Quizz</button>
    </div>
  )
}
