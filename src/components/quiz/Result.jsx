import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "./styles/Result.css";

function Result({ score, playAgain, numOfQuiz }) {
  return (
    <div className="result">
      <h1>
        ` You have got {score}/{numOfQuiz}`
      </h1>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default Result;
