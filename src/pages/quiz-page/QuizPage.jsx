import styles from './QuizPage.module.css';

import Question from '../../components/Question';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuizPage({ userConfigObj }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const { category, amount, type, difficulty } = userConfigObj;
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    // console.log(url);
    // https://opentdb.com/api.php?amount=5&category=23&difficulty=attack-on-titan&type=attack-on-titan
    axios.get(url).then((response) => {
      setQuestions(response.data.results);
    });
  }, []);

  console.log(questions);

  return (
    <section className="QuizPage">
      {questions &&
        questions.map((question) => {
          return <Question key={question.correct_answer} question={question} />;
        })}
      {/* <Question />
      <Question />
      <Question /> */}
    </section>
  );
}
