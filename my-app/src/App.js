import { useEffect, useState } from "react";
import "./App.css";
const userChoicePhoto = [
  <img src="./assets/rock.png"></img>,
  <img src="./assets/paper.png"></img>,
  <img src="./assets/scissors.png"></img>,
];
const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

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
        <h1>{userChoicePhoto}</h1>
        <h1>{computerChoice}</h1>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleClick(choice)} id="j">
            <div id="c">
              <h2>{choice}</h2>
            </div>
          </button>
        ))}
        <h1>{result}</h1>
      </div>
    )
  
};

export default App;
