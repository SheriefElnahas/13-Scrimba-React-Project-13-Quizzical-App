import { useState } from 'react';

// Stlyes
import styles from './StartQuiz.module.css';

export default function StartQuiz({ onStartQUizButtonClicked, setQuizHasStarted }) {
  const [userChoices, setUserChoices] = useState({ category: '', amount: '', type: '', difficulty: '' });
  const [userChoicesCondition, setUserChoicesCondition] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUserChoices((prevUserChoices) => {
      return {
        ...prevUserChoices,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass User Choices Back Up To App Parent
    onStartQUizButtonClicked(userChoices);

    const { category, amount, type, difficulty } = userChoices;
    // setUserChoicesCondition(((category.length === amount.length) === type.length) === difficulty.length) !== 0;

    const condition = category.length === 0 || amount.length === 0 || type.length === 0 || difficulty.length === 0;

    // Only Start the quiz if all the inputs field are used.
    if (condition) {
      setUserChoicesCondition(true);
    } else {
      // Change Quiz Started To True to hide StartQuiz Component & Show QuizPage Component Instead
      setQuizHasStarted(true);
      setUserChoicesCondition(false);
    }
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
              Write the number of questions
              <input type="number" min={1} max={50} placeholder="Questions number between 1 : 50" value={userChoices.amount} onChange={handleChange} name="amount" />
            </label>
          </p>
          <p>
            <label htmlFor="category">Select The Type</label>
            <select id="questions-type" value={userChoices.type} onChange={handleChange} name="type">
              <option value="" disabled defaultValue={''}>
                -- Choose A Type --
              </option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </p>
          <p>
            <label htmlFor="difficulty">Select The Quiz Difficulty</label>
            <select id="questions-type" value={userChoices.difficulty} onChange={handleChange} name="difficulty">
              <option value="" disabled defaultValue={''}>
                -- Choose A Level --
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </p>
        </div>
        {userChoicesCondition && <p className={styles['alert-text']}>Sorry, there are missing or invalid inputs</p>}
        <p>
          <button className="btn">Start Quizz</button>
        </p>
      </form>
    </section>
  );
}
