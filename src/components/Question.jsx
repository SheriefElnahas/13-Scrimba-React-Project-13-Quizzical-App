import './Question.css';

import { Fragment, React, useState } from 'react';

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

function Question({ choices, questionNum, questionHeading }) {
  const [formData, setFormData] = useState({ answer: '' });

  // Shuffle The Array Of Choices to change the position of the correct answer from 3th index to a random index
  shuffle(choices);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article className="Question">
      <h3>
        {questionNum}. {questionHeading}
      </h3>
      <div className="answers">
        <form onSubmit={handleSubmit}>
          <div className="col-12 pb-5">
            {choices.map((choice, index) => {
              return (
                <Fragment key={index}>
                  <input id={`tool-${choice}`} className="checkbox-tools" type="radio" name={'answer'} onChange={handleChange} value={choice} checked={formData.answer === choice} />
                  <label className="for-checkbox-tools" htmlFor={`tool-${choice}`}>
                    <i className="uil uil-line-alt"></i>
                    {choice}
                  </label>
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
