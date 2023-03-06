import './App.css';
import { useState } from 'react';

// Improved Components
import StartQuiz from './pages/start-quiz/StartQuiz';
import QuizPage from './pages/quiz-page/QuizPage';

function App() {
  const [quizHasStarted, setQuizHasStarted] = useState(true);
  const [userConfigObj, setUserConfigObj] = useState({});

  // When the user click on start quiz, get the userConfig from StartQuizz Component And pass it to QuizPage Component
  const onStartQUizButtonClicked = (userConfig) => {
    setUserConfigObj(userConfig);
  };

  return (
    <div className="App">
      {/* If Quizz is not started then show startQuizz Component, and if the quizz is started show QuizPage Component instead */}
      {!quizHasStarted && <StartQuiz onStartQUizButtonClicked={onStartQUizButtonClicked} setQuizHasStarted={setQuizHasStarted} />}
      {quizHasStarted && <QuizPage userConfigObj={userConfigObj} />}
    </div>
  );
}

export default App;
