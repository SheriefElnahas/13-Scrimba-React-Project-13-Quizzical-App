import './App.css';
import {useState } from 'react';
import StartQuiz from './StartQuiz';

function App() {
  const [started,setstarted] = useState(false);

  function start() {
    setstarted(true);
  }

  return (
    <div className="App">
      {!started &&       <StartQuiz start={start}/>}

    </div>
  )
}

export default App
