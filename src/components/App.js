import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => (setQuestions(questions))) 
  }, [])

  if (!questions) {
    return <h1>Loading...</h1>
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions) 
  } 

  function handleUpdateAnswer(updatedQuestion) {
    const updatedAnswer = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
            return updatedQuestion
        } else {
          return question
        }
  })
   setQuestions(updatedAnswer)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateAnswer={handleUpdateAnswer}/>}
    </main>
  );
}

export default App;
