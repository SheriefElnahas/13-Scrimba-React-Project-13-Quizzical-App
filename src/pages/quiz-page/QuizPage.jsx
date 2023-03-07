import { Fragment, useEffect, useState } from 'react';

// Styles
import styles from './QuizPage.module.css';

// Components
import Question from '../../components/Question';
import useAxios from '../../hooks/useAxios';
import useShuffle from '../../hooks/useShuffle';

export default function QuizPage({ userConfigObj, setQuizHasStarted }) {
  const { questions, isPending, error } = useAxios(userConfigObj);

  const [score, setScore] = useState(0);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const recieveResults = (userAnswer, questionNum, correctAnswer) => {
    // console.log(`Question Num : ${questionNum} - User Answer: ${userAnswer} - Correct Answer ${correctAnswer}`);
    if (correctAnswer === userAnswer) {
      setScore((score) => (score += 1));
    }
  };
  const onCheckAnswerButtonClicked = () => {
    setQuizFinished(true);
  };
  console.log(styles);

  return (
    <section className={styles.QuizPage}>
      {isPending && <p>...Loading</p>}
      {!isPending && (
        <Fragment>
          {questions &&
            questions.map(({ correct_answer, incorrect_answers, question }, index) => {
              // Build the choices array out from incorrect answer arr and contach that to correct answer
              const choices = [...incorrect_answers, correct_answer];

              // Shuffle The Array Of Choices to change the position of the correct answer from 3th index to a random index
              // const shuffledArr = useShuffle(choices);

              return <Question recieveResults={recieveResults} key={question} choices={choices} questionHeading={question} questionNum={index + 1} correctAnswer={correct_answer} quizFinished={quizFinished} />;
            })}

          <div className={styles.buttons}>
            {<p className={`${quizFinished ? styles.show : styles.hide}`}>{`You scored ${score}/${questions.length} correct answers`}</p>}
            {!quizFinished && (
              <button onClick={onCheckAnswerButtonClicked} className="btn">
                Check Answers
              </button>
            )}

            {quizFinished && <button className={`btn ${styles['btn-play-again']} }`}>Play Again!</button>}
            <br />
            <button onClick={() => setQuizHasStarted(false)} className={`btn ${styles['btn-start-page']}`}>
              Return To Start Page
            </button>
          </div>
        </Fragment>
      )}

      {error && <p>{error}</p>}
    </section>
  );
}
