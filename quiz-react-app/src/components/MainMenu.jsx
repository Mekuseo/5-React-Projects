import "../index.css";
import { useContext } from "react";
import { QuizContext } from "../helpers/Context";

// available game states "menu, play, finish"
export const MainMenu = () => {
  const { setGameState, setUserName } = useContext(QuizContext);

  const startQuizHandle = () => {
    setGameState("play");
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div className="quizCard">
        <input
          type="text"
          placeholder="...Enter your name to start"
          required
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button className="startQuiz" onClick={startQuizHandle}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};
