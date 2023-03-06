import './Question.css';

import { Fragment, React, useState } from 'react';

function Question({ choices, questionNum, questionHeading, onCheckAnswerButtonClicked }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    onCheckAnswerButtonClicked(answer);
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
              console.log(choice);
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
