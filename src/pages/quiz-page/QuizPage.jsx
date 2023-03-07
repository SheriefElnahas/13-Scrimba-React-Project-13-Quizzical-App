import { Fragment, useEffect, useState } from 'react';

// Styles
import styles from './QuizPage.module.css';

// Components
import Question from '../../components/Question';
import useAxios from '../../hooks/useAxios';

export default function QuizPage({ userConfigObj, setQuizHasStarted }) {
  let { modifiedQuestionsArr, isPending, error } = useAxios(userConfigObj);

  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const checkUserAnswer = (userAnswer, correctAnswer) => {
    // Increase the score by one if the user answer is equal to the correct answer
    if (correctAnswer === userAnswer) {
      setScore((score) => (score += 1));
    }
  };

  // When the user click on check answer buttons change quiz finish to true
  const onCheckAnswersButtonClicked = () => {
    setQuizFinished(true);
  };

  // const onPlayAgainButtonClicked = () => {
  //   console.log('make another request');
  // };

  return (
    <section className={styles.QuizPage}>
      {isPending && <p>...Loading</p>}
      {!isPending && (
        <Fragment>
          {modifiedQuestionsArr &&
            modifiedQuestionsArr.map(({ correct_answer, shuffledChoicesArr, question }, index) => {
              //

              return <Question checkUserAnswer={checkUserAnswer} key={question} choices={shuffledChoicesArr} questionHeading={question} questionNum={index + 1} correctAnswer={correct_answer} quizFinished={quizFinished} />;
            })}

          <div className={styles.buttons}>
            {
              <p className={`${quizFinished ? styles.show : styles.hide}`}>
                {`You scored ${score}/${modifiedQuestionsArr.length}  correct answers`} {score < modifiedQuestionsArr.length / 2 ? '🤯' : '🥳'}
              </p>
            }

            <button onClick={onCheckAnswersButtonClicked} className="btn">
              Check Answers
            </button>

            {/* {quizFinished && (
              <button onClick={onPlayAgainButtonClicked} className={`btn ${styles['btn-play-again']} }`}>
                Play Again!
              </button>
            )} */}
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
