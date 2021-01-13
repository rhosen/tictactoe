import './App.css';
import Playground from "./Playground";

function App() {

  let player1, player2;

  startGame();
  
  function startGame() {
    player1 = prompt("Player 1, Enter your name");
    player2 = prompt("Player 2, Enter your name");
  }

  return (
    < Playground player1 ={player1} player2 = {player2} />
  );
}

export default App;
