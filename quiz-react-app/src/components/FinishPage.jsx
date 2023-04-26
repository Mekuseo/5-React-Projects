import { useContext } from "react"
import { QuizContext } from "../helpers/Context"
import Questions from "../Questions"
import '../index.css';

export const FinishPage = () => {
  const { score, userName, setGameState } = useContext(QuizContext)

  const restart = () => {
    setGameState("menu");
  }

  return (
    <div className="quizCard">
      <h1>End of Quiz</h1>
      <h3>{userName} scored {score}/{Questions.length}</h3>
      <button className="quizBtn" onClick={restart}>Restart</button>
    </div>
  )
}
