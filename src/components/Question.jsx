import './Question.css';

import { Fragment, React, useEffect, useState } from 'react';

function Question({ choices, questionNum, questionHeading, correctAnswer, recieveResults, quizFinished }) {
  const [formData, setFormData] = useState({ answer: '' });
  const [inputBackgroundImage, setInputBackgroundImage] = useState('');

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
    // console.log(formData.answer);
    recieveResults(formData.answer, questionNum, correctAnswer);
  }, [formData.answer]);

  return (
    <article className="Question">
      <h3>
        {questionNum}. {questionHeading}
      </h3>
      <div className="answers">
        <form>
          <div className="col-12 pb-5">
            {choices.map((choice, index) => {
              // console.log(`choice is ${choice} - correct answer is ${correctAnswer}`);

              return (
                <Fragment key={index}>
                  <input id={`tool-${choice}`} className="checkbox-tools" type="radio" name={'answer'} disabled={quizFinished} onChange={handleChange} value={choice} checked={formData.answer === choice} />

                  <label className={`for-checkbox-tools ${choice === correctAnswer && quizFinished ? 'right-answer' : choice === formData.answer && quizFinished && 'wrong-answer'}`} htmlFor={`tool-${choice}`}>
                    <i className="uil uil-line-alt"></i>
                    {choice}
                  </label>
                  {/* <label className={`for-checkbox-tools ${choice === correctAnswer && quizFinished && inputBackgroundImage}`} htmlFor={`tool-${choice}`}>
                    <i className="uil uil-line-alt"></i>
                    {choice}
                  </label> */}

                  {/* <label className={`for-checkbox-tools ${choice === correctAnswer && quizFinished && 'right-answer'}`} htmlFor={`tool-${choice}`}>
                    <i className="uil uil-line-alt"></i>
                    {choice}
                  </label> */}
                </Fragment>
              );
            })}

            <hr />
          </div>
        </form>
      </div>
    </article>
  );
}

export default Question;
