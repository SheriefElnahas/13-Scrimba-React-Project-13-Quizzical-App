import styles from './StartQuiz.module.css';

import { useState } from 'react';

export default function StartQuiz() {
  console.log(styles);
  return (
    <section className={styles.StartQuiz}>
      <h1>Quizzical</h1>
      <p>This quiz tests your knowledge in many scopes.</p>

      <form>
        <h2>Choose how you want to test yourself.</h2>
        <div className={styles['user-choices']}>
          <p>
            <label htmlFor="category">Select The Category</label>
            <select id="category">
              <option value="" disabled selected>
                -- Choose A Category --
              </option>
              <option value="attack-on-titan">General Knowledge</option>
              <option value="vinland-saga">Science : Nature</option>
              <option value="vinland-saga">Science : Computers</option>
              <option value="vinland-saga">Science : Mathematics</option>
              <option value="vinland-saga">Sports</option>
              <option value="vinland-saga">Geography</option>
              <option value="vinland-saga">History</option>
            </select>
          </p>
          <p>
            <label>
              {' '}
              Write the number of questions
              <input type="number" placeholder="Questions number between 1 : 50" />
            </label>
          </p>
          <p>
            <label htmlFor="category">Select The Type</label>
            <select id="questions-type">
              <option value="" disabled selected>
                -- Choose A Type --
              </option>
              <option value="attack-on-titan">Attack On Titan</option>
              <option value="vinland-saga">Vinland Saga</option>
              <option value="demon-slayer">Demon Slayer</option>
            </select>
          </p>
          <p>
            <label htmlFor="difficulty">Select The Quiz Difficulty</label>
            <select id="questions-type">
              <option value="" disabled selected>
                -- Choose A Level --
              </option>
              <option value="attack-on-titan">Attack On Titan</option>
              <option value="vinland-saga">Vinland Saga</option>
              <option value="demon-slayer">Demon Slayer</option>
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
