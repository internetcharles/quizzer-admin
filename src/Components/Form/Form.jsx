/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import Question from './Question';

export const Form = () => {
  const blankQuestion = {
    question: '',
    correctAnswer: '',
    incorrectAnswers: [],
  };

  const [quizState, setQuizState] = useState({
    title: '',
    description: '',
  });

  const [questionState, setQuestionState] = useState([
    { ...blankQuestion },
  ]);

  const addQuestion = () => {
    setQuestionState([...questionState, { ...blankQuestion }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...questionState, ...quizState });
  };

  const handleQuizChange = (e) => {
    setQuizState({
      ...quizState,
      [e.target.name]: [e.target.value],
    });
  };

  const handleQuestionChange = (e) => {
    const updatedQuestions = [...questionState];
    updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
    setQuestionState(updatedQuestions);
  };

  return (
    <>
      <div>
        New Quiz
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={quizState.title}
          placeholder="Quiz Title"
          onChange={handleQuizChange}
        />
        <input
          type="text"
          name="description"
          value={quizState.description}
          placeholder="Quiz Description"
          onChange={handleQuizChange}
        />
        {
          questionState.map((val, idx) => (
            <Question
              key={`question-${idx}`}
              idx={idx}
              questionState={questionState}
              handleQuestionChange={handleQuestionChange}
            />
          ))
        }
        <input type="button" value="Add New Question" onClick={addQuestion} />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
