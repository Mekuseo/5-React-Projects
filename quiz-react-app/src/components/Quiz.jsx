import Questions from "../Questions";
import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import "../index.css";

export const Quiz = () => {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    chosenOptions,
    setChosenOptions,
    setGameState,
    score,
    setScore
  } = useContext(QuizContext);

  const question = Questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    const previousOption = chosenOptions[currentQuestionIndex];

    if (previousOption === option) {
      return;
    }

    const updatedChosenOptions = [...chosenOptions];
    updatedChosenOptions[currentQuestionIndex] = option;
    setChosenOptions(updatedChosenOptions);

    if (previousOption === question.answer) {
      setScore(score - 1);
    }

    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < Questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState("finish");
    }
  };

  return (
    <div className="quizCard">
      <h2>{question.question}</h2>
      {question.options.map((option, optionIndex) => {
        const isSelected = chosenOptions[currentQuestionIndex] === option;
        return (
          <button
            key={optionIndex}
            className={`answerBtn ${isSelected ? "selected" : ""}`}
            onClick={() => {
              handleOptionClick(option);
            }}
          >
            {option}
          </button>
        );
      })}
      <button className="nextBtn" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};
