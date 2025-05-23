import { useMemo, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameModal from './modals/NameModal'

function App() {

  interface Action {
    type: string
  }

  const getPower100TimesOfValue = (value: number): number => value**100;

  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

  const [count, dispatchCount] = useReducer(reducer, 0);
  const [name, setName] = useState<string>("");
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);
  const powerResult = useMemo(() => getPower100TimesOfValue(count), [count]);
  
  const closeNameModal = () => setIsNameModalOpen(false);

  const saveName = (name: string) => {
    setName(name);
    closeNameModal();
  }

  return (
    <>
      <div>
        <p>Your name is {name}</p>
        <button onClick={() => setIsNameModalOpen(true)}>Update name</button>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>The count power 100 is {powerResult}</p>
      <div className="card">
        <button onClick={() => dispatchCount({type: "DECREMENT"})}>
          Less !
        </button>
        <button>
          count is {count}
        </button>
        <button onClick={() => dispatchCount({type: "INCREMENT"})}>
          More !
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => dispatchCount({type: "RESET"})}>
          Reset to 0 !
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <NameModal isOpen={isNameModalOpen} onClose={closeNameModal} name={name} saveName={saveName} />
    </>
  )
}

export default App
