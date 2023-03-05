import './App.css';
import { useState } from 'react';
// import StartQuiz from './StartQuiz';
import QuizPage from './QuizPage';

// Improved Components
import StartQuiz from './pages/start-quiz/StartQuiz';

function App() {
  const [started, setstarted] = useState(false); // Change this to false later

  function start() {
    setstarted(true);
  }

  return (
    <div className="App">
      {!started && <StartQuiz start={start} />}
      {started && <QuizPage />}
    </div>
  );
}

export default App;
