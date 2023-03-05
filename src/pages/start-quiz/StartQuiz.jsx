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
        <p>
          <label htmlFor="category">Select The Category</label>
          <select id="category">
            <option value="" disabled>
              {' '}
              -- Choose --{' '}
            </option>
            <option value="attack-on-titan">Attack On Titan</option>
            <option value="vinland-saga">Vinland Saga</option>
            <option value="demon-slayer">Demon Slayer</option>
          </select>
        </p>
        <p>
          <label>
            {' '}
            Write the number of questions
            <input type="number" />
          </label>
        </p>
        <p>
          <label htmlFor="category">Select The Category</label>
          <select id="questions-type">
            <option value="" disabled>
              {' '}
              -- Choose --{' '}
            </option>
            <option value="attack-on-titan">Attack On Titan</option>
            <option value="vinland-saga">Vinland Saga</option>
            <option value="demon-slayer">Demon Slayer</option>
          </select>
        </p>
        <p>
          <label htmlFor="difficulty">Choose The Quiz Difficulty</label>
          <select id="questions-type">
            <option value="" disabled>
              {' '}
              -- Choose --{' '}
            </option>
            <option value="attack-on-titan">Attack On Titan</option>
            <option value="vinland-saga">Vinland Saga</option>
            <option value="demon-slayer">Demon Slayer</option>
          </select>
        </p>
      </form>
    </section>
  );
}
