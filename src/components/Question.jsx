import './Question.css';

import { useState } from 'react';

function Question() {
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
  };

  return (
    <article className="Question">
      <h3>1. Best Anime Character?</h3>
      <div className="answers">
        <form onSubmit={handleSubmit}>
          <div className="col-12 pb-5">
            <input id="tool-1" className="checkbox-tools" type="radio" name="answer" onChange={handleChange} value={'1'} checked={formData.answer === '1'} />
            <label className="for-checkbox-tools" htmlFor="tool-1">
              <i className="uil uil-line-alt"></i>
              line
            </label>

            <input id="tool-2" className="checkbox-tools" type="radio" name="answer" onChange={handleChange} value={'2'} checked={formData.answer === '2'} />
            <label htmlFor="tool-2" className="for-checkbox-tools">
              <i className="uil uil-vector-square"></i>
              square
            </label>
            <input id="tool-3" className="checkbox-tools" type="radio" name="answer" onChange={handleChange} value={'3'} checked={formData.answer === '3'} />
            <label htmlFor="tool-3" className="for-checkbox-tools">
              <i className="uil uil-ruler"></i>
              ruler
            </label>
            <input id="tool-4" className="checkbox-tools" type="radio" name="answer" onChange={handleChange} value={'4'} checked={formData.answer === '4'} />
            <label htmlFor="tool-4" className="for-checkbox-tools">
              <i className="uil uil-crop-alt"></i>
              crop
            </label>
          </div>
        </form>
      </div>
    </article>
  );
}

export default Question;
