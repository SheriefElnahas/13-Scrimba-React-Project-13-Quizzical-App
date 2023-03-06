import { useEffect, useState } from 'react';

// Styles
import styles from './QuizPage.module.css';

// Components
import Question from '../../components/Question';
import useAxios from '../../hooks/useAxios';

export default function QuizPage({ userConfigObj }) {
  const { questions, isPending, error } = useAxios(userConfigObj);

  // const [questions, setQuestions] = useState([]);
  // const [isPending, setIsPending] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // 1- Extract User Config That you got from inputs
  //   const { category, amount, type, difficulty } = userConfigObj;

  //   // 2-Build The Url Using The User Config Inputs
  //   const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  //   const fetchQuestions = async () => {
  //     setIsPending(true);
  //     try {
  //       const response = await axios.get(url);
  //       setIsPending(false);
  //       setQuestions(response.data.results);
  //       setError(null);
  //     } catch (err) {
  //       console.log(err);
  //       setIsPending(false);
  //       setError('Coult Not Fetch Data');
  //     }
  //   };

  //   fetchQuestions();
  // }, []);

  return (
    <section className={styles.QuizPage}>
      {questions &&
        questions.map(({ correct_answer, incorrect_answers, question }, index) => {
          const choices = [...incorrect_answers, correct_answer];
          console.log(correct_answer);
          return <Question key={question} choices={choices} questionHeading={question} questionNum={index + 1} correctAnswer={correct_answer} />;
        })}
    </section>
  );
}
