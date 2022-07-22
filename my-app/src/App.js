import { useEffect, useState, useCallback } from "react";
import "./App.css";

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

const myChoices = {
  rock: rock,
  paper: paper,
  scissors: scissors,
}

const choices = ["rock", "paper", "scissors"];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [computerImage, setComputerImage] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
    setUserImage(myChoices[value]);
    setComputerImage(myChoices[value]);
  };

  const generateComputerChoice = useCallback(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, [setComputerChoice])


  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setResult(<u>You Win!</u>);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setResult(<u>You Lose!</u>);
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          setResult(<u>Draw!</u>);
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (

    
      <div>
        <h1 id="cont">
          <img src={userImage}/>
        </h1>
        <div id="CI">
        <h1><img src={computerImage}/></h1>
        </div>
        <div id="container">
          {choices.map((choice, index) => (
          <button key={index} onClick={() => handleClick(choice)} id="j">
           <h2>{choice}</h2>
          </button>
          ))}
          </div>
        <h1 id="res">{result}</h1>
      </div>
    )
  
};

export default App;
