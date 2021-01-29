import React, { useState } from "react";
// import Choices from "./Choices";
import "./styles/QuizBody.css";
// import Addmin from "./Addmin";

function QuizBody({ choices, question, id, selected }) {
  const [answer, setAnswer] = useState(choices);

  return (
    <div className="quizBody">
      <div className="question">
        {id} .{question}
      </div>

      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default QuizBody;
