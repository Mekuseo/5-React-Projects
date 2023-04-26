import { MainMenu } from "./components/MainMenu";
import { Quiz } from "./components/Quiz";
import { useState } from "react";
import { QuizContext } from "./helpers/Context";
import { FinishPage } from "./components/FinishPage";
import Questions from "./Questions";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenOptions, setChosenOptions] = useState(
    Array(Questions.length).fill(null)
  );

  return (
    <QuizContext.Provider
      value={{
        gameState,
        setGameState,
        score,
        setScore,
        userName,
        setUserName,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        chosenOptions,
        setChosenOptions
      }}
    >
      {gameState === "menu" && <MainMenu />}
      {gameState === "play" && <Quiz />}
      {gameState === "finish" && <FinishPage />}
    </QuizContext.Provider>
  );
}

export default App;
