import React, { useContext, useState } from "react";
import Alert from "../components/Alert";
import AppContext from "../contexts/AppContext";

function QuizPage() {
  //console.log("questions 0 test: ", questions[0].question);
  const { questionData } = useContext(AppContext);
  const { index, setIndex } = useContext(AppContext);
  const { setAppState } = useContext(AppContext);
  const { selectedAnswer, setSelectedAnswer } = useContext(AppContext);
  const { score, setScore } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState(false);
  //const [stop, setStop] = useState(false);

  const handleClick = (opt) => {
    setSelectedAnswer(opt);

    setErrorMessage(false);
  };

  const handleCheck = (i) => {
    if (
      selectedAnswer === i &&
      selectedAnswer === questionData[index]?.answer
    ) {
      return "correct";
    } else if (
      selectedAnswer === i &&
      selectedAnswer !== questionData[index]?.answer
    ) {
      return "wrong";
    } else if (i === questionData[index]?.answer) {
      return "correct";
    }
  };

  const nextQuestion = () => {
    if (selectedAnswer === questionData[index]?.answer) {
      setScore(score + 4);
    }
    if (selectedAnswer) {
      setIndex(index + 1);
      setSelectedAnswer(null);
    } else {
      setErrorMessage("Lütfen Bir Seçenek Belirleyin");
    }
  };
  return (
    <div className="quiz">
      <div className="question">{questionData[index]?.question}</div>
      {errorMessage && (
        <Alert>
          <i class="fa-solid fa-circle-exclamation"></i>
          {errorMessage}
        </Alert>
      )}
      <div className="quiz-info">
        <div className="question-count">
          <i class="fa-solid fa-circle-question"></i> Soru {index + 1} /{" "}
          {questionData.length}
        </div>

        <div className="point">
          <i class="fa-solid fa-star"></i> Puan: {score}
        </div>
      </div>
      <div className="options">
        <button
          className={`option ${
            selectedAnswer && handleCheck(questionData[index]?.option1)
          }`}
          onClick={() => {
            handleClick(questionData[index]?.option1);
          }}
          disabled={selectedAnswer}
        >
          {questionData[index]?.option1}
        </button>
        <button
          className={`option ${
            selectedAnswer && handleCheck(questionData[index]?.option2)
          }`}
          onClick={() => {
            handleClick(questionData[index]?.option2);
          }}
          disabled={selectedAnswer}
        >
          {questionData[index]?.option2}
        </button>
        <button
          className={`option ${
            selectedAnswer && handleCheck(questionData[index]?.option3)
          }`}
          onClick={() => {
            handleClick(questionData[index]?.option3);
          }}
          disabled={selectedAnswer}
        >
          {questionData[index]?.option3}
        </button>
        <button
          className={`option ${
            selectedAnswer && handleCheck(questionData[index]?.option4)
          }`}
          onClick={() => {
            handleClick(questionData[index]?.option4);
          }}
          disabled={selectedAnswer}
        >
          {questionData[index]?.option4}
        </button>
      </div>
      <div className="control-buttons">
        {index === questionData.length - 1 && selectedAnswer ? (
          <button
            className="next-btn"
            onClick={() => {
              setAppState("result");
              setIndex(0);
            }}
          >
            Sonucu Gör
          </button>
        ) : (
          <button className="next-btn" onClick={nextQuestion}>
            <span>Sonraki Soru</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
