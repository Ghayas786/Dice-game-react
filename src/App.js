
import './App.css';
import GamePlay from './Components/GamePlay';
import StartGame from "./Components/StartGame";
import { useState } from 'react';

function App() {
  const [isGameStarted,setGameStarted]= useState(false)
  
  const tooggleGameplay=()=>{
    setGameStarted ((prev)=>!prev)
  }
  
  return (
    <div className="App">
      {
        isGameStarted ? <GamePlay/> :<StartGame toogle={tooggleGameplay}/>
      }
    </div>
  );
}

export default App;
