import { useEffect, useState, useCallback } from "react";
import "./App.css"; 

const selections = ["✌", "✋", "✊"];

const mySelections = {
  'rock': "✊",
  'paper': "✋",
  'scissors': "✌",
}

const choices = ["rock", "paper", "scissors"];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setUserChoice(mySelections[value]);
    generateComputerChoice();
  };

  const generateComputerChoice = useCallback(() => {
    const randomChoice = selections[Math.floor(Math.random() * selections.length)];
    setComputerChoice(randomChoice);
  }, [setComputerChoice])


  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockpaper':
        case 'paperrock':
          setResult = "You win!"
         break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult = "You lose!"
         break
         case 'rockrock':
          case 'paperpaper':
          case 'scissorsscissors':
            setResult = "Draw!"
           break
    }
    }
      }, [computerChoice, userChoice])

      
  return (

    <div>
    <div id="cont"> 
    <h1 class="py">
      Player 1:
      <h1>{userChoice}</h1>
    </h1>
    <div>
    <h1 class="py">
      Player 2:
      <h1>{computerChoice}</h1>
      </h1>
    </div>
    </div>
    <div id="container">
      {choices.map((choice, index) => (
      <button key={index} onClick={() => handleClick(choice)} id="j">
       <h2>{choice}</h2>
      </button>
      ))}
      </div>
      <h1>{result}</h1>
  </div>
)

      }; 

export default App;

