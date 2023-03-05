import './App.css';
import { useState } from 'react';
// import StartQuiz from './StartQuiz';
// import QuizPage from './QuizPage';

// Improved Components
import StartQuiz from './pages/start-quiz/StartQuiz';
import QuizPage from './pages/quiz-page/QuizPage';

function App() {
  const [started, setstarted] = useState(true); // Change this to false later

  const startQuizFunc = (userChoices) => {
    console.log(userChoices);
  };
  function start() {
    setstarted(true);
  }

  return (
    <div className="App">
      {!started && <StartQuiz startQuizFunc={startQuizFunc} />}
      {started && <QuizPage />}
    </div>
  );
}

export default App;
