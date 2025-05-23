import logo from './logo.svg';
import '../css/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hey !");
    alert(`${counter} times !`);
  }, [counter]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You counted {counter} times !</p>
        <button onClick={() => {setCounter(counter + 1); console.log(counter)}}>Cick me !</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
