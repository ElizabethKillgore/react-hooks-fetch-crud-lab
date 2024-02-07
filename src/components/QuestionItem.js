import React from "react";

function QuestionItem({ question, allQuestions, onDeleteQuestion, onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handleDeleteClick() {
  fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(()=> onDeleteQuestion(question))
}

function handleUpdateAnswerChange(event) {
  console.log(event.target.value)

  fetch(`http://localhost:4000/questions/${question.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application:json",
        },
        body: JSON.stringify({correctIndex: parseInt(event.target.value)})

  })
        .then((r) => r.json())
        .then((updatedAnswer) => onUpdateAnswer(updatedAnswer))
   }



  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateAnswerChange}>{options}</select>
      </label>
      <button className="remove" onClick={handleDeleteClick}>Delete Question</button>

    </li>
  );
}

export default QuestionItem;
