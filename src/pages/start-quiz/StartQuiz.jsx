import styles from './StartQuiz.module.css';

import { useState } from 'react';

export default function StartQuiz({ startQuizFunc }) {
  const [userChoices, setUserChoices] = useState({ category: '', amount: '', type: '', difficulty: '' });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setUserChoices((prevUserChoices) => {
      return {
        ...prevUserChoices,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuizFunc(userChoices);
  };

  return (
    <section className={styles.StartQuiz}>
      <h1>Quizzical</h1>
      <p>This quiz tests your knowledge in many scopes</p>

      <form onSubmit={handleSubmit}>
        <h2>Choose how you want to test yourself!</h2>
        <div className={styles['user-choices']}>
          <p>
            <label htmlFor="category">Select The Category</label>
            <select id="category" value={userChoices.category} onChange={handleChange} name="category">
              <option value="" disabled defaultValue={''}>
                -- Choose A Category --
              </option>
              <option value="9">General Knowledge</option>
              <option value="17">Science : Nature</option>
              <option value="18">Science : Computers</option>
              <option value="19">Science : Mathematics</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
            </select>
          </p>
          <p>
            <label>
              {' '}
              Write the number of questions
              <input type="number" placeholder="Questions number between 1 : 50" value={userChoices.amount} onChange={handleChange} name="amount" />
            </label>
          </p>
          <p>
            <label htmlFor="category">Select The Type</label>
            <select id="questions-type" value={userChoices.type} onChange={handleChange} name="type">
              <option value="" disabled defaultValue={''}>
                -- Choose A Type --
              </option>
              <option value="attack-on-titan">Multiple Choice</option>
              <option value="vinland-saga">True / False</option>
            </select>
          </p>
          <p>
            <label htmlFor="difficulty">Select The Quiz Difficulty</label>
            <select id="questions-type" value={userChoices.difficulty} onChange={handleChange} name="difficulty">
              <option value="" disabled defaultValue={''}>
                -- Choose A Level --
              </option>
              <option value="attack-on-titan">Easy</option>
              <option value="vinland-saga">Medium</option>
              <option value="demon-slayer">Hard</option>
            </select>
          </p>
        </div>
        <p>
          <button>Start Quizz</button>
        </p>
      </form>
    </section>
  );
}
