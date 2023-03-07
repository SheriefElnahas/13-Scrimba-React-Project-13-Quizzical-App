import './Question.css';

import { Fragment, React, useEffect, useState } from 'react';

function Question({ choices, questionNum, questionHeading, correctAnswer, checkUserAnswer, quizFinished }) {
  const [formData, setFormData] = useState({ answer: '' });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  useEffect(() => {
    //Only when we get an answer, pass the user answer and the correct answer to compare them
    checkUserAnswer(formData.answer, correctAnswer);
  }, [formData.answer]);

  return (
    <article className="Question">
      <h3>
        {questionNum}. {questionHeading}
      </h3>

      <form>
        {choices.map((choice, index) => {
          return (
            <Fragment key={index}>
              <input id={`tool-${choice}`} className="checkbox-tools" type="radio" name={'answer'} disabled={quizFinished} onChange={handleChange} value={choice} checked={formData.answer === choice} />
              <label className={`for-checkbox-tools ${choice === correctAnswer && quizFinished ? 'right-answer' : choice === formData.answer && quizFinished && 'wrong-answer'}`} htmlFor={`tool-${choice}`}>
                <i className="uil uil-line-alt"></i>
                {choice}
              </label>
            </Fragment>
          );
        })}
      </form>
    </article>
  );
}

export default Question;
