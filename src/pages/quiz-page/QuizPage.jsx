import styles from './QuizPage.module.css';

import Question from '../../components/Question';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuizPage({ userConfigObj }) {
  const [questions, setQuestions] = useState([]);

  const { category, amount, type, difficulty } = userConfigObj;

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    axios.get(url).then((response) => {
      setQuestions(response.data.results);
    });
  }, []);

  console.log(questions);

  return (
    <section className={styles.QuizPage}>
      {questions &&
        questions.map((question, index) => {
          return <Question key={question.correct_answer} question={question} questionNum={index + 1} />;
        })}
      {/* <Question />
      <Question />
      <Question /> */}
    </section>
  );
}
