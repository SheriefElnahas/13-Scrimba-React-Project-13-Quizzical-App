import './App.css';
import { useState } from 'react';
// import StartQuiz from './StartQuiz';
// import QuizPage from './QuizPage';

// Improved Components
import StartQuiz from './pages/start-quiz/StartQuiz';
import QuizPage from './pages/quiz-page/QuizPage';

function App() {
  const [quizHasStarted, setQuizHasStarted] = useState(false);
  const [userConfigObj, setUserConfigObj] = useState({});

  const onStartQUizButtonClicked = (userConfig) => {
    console.log(userConfig);
    setUserConfigObj(userConfig);
  };

  return (
    <div className="App">
      {!quizHasStarted && <StartQuiz onStartQUizButtonClicked={onStartQUizButtonClicked} setQuizHasStarted={setQuizHasStarted} />}
      {quizHasStarted && <QuizPage userConfigObj={userConfigObj} />}
    </div>
  );
}

export default App;
