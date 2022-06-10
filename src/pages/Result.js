import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
function Result() {
  const { score, setAppState, setScore, setSelectedAnswer } =
    useContext(AppContext);
  return (
    <div className="result">
      <div className="result-info">
        <div>
          <i class="fa-solid fa-star"></i> Puan: {score}
        </div>
        <div>
          <i class="fa-solid fa-trophy"></i> Başarı: {score / 4} / {25}
        </div>
      </div>
      <button
        className="next-btn"
        onClick={() => {
          setAppState("home");
          setScore(0);
          setSelectedAnswer(null);
        }}
      >
        Ana Sayfa
      </button>
    </div>
  );
}

export default Result;
