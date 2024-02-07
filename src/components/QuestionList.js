import React, { useState } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList( { questions, onDeleteQuestion, onUpdateAnswer  }) {
  
  let allQuestions = questions.map((question) => {
    return  <QuestionItem  key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateAnswer={onUpdateAnswer}/> 
  }
)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="Questions"> {allQuestions} 
        
      </ul> 
    </section>
  );
}

export default QuestionList;


 
 