/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuiz } from '../../hooks/quiz';

export const Quiz = () => {
  const { id } = useParams();
  const { loading, quiz } = useQuiz(id);

  if (loading) return <h1>Loading...</h1>;
  console.log(quiz);

  const parsedQuestions = JSON.parse(quiz.questions);
  const parsedCorrectAnswers = JSON.parse(quiz.correctAnswers);
  const parsedIncorrectAnswer1 = JSON.parse(quiz.incorrectAnswer1);
  const parsedIncorrectAnswer2 = JSON.parse(quiz.incorrectAnswer2);
  const parsedIncorrectAnswer3 = JSON.parse(quiz.incorrectAnswer3);

  return (
    <div>
      {console.log(parsedQuestions)}
      <h2>{quiz.title}</h2>
      <h3>{quiz.description}</h3>
      {parsedQuestions.map((question, idx) => (
        <>
          <div>{question}</div>
          <div>
            Correct Answer:
            {' '}
            <br />
            {parsedCorrectAnswers[idx]}
          </div>
          <div>
            Incorrect Answers:
            {' '}
            <br />
            {parsedIncorrectAnswer1[idx]}
            {' '}
            {' - '}
            {' '}
            {parsedIncorrectAnswer2[idx]}
            {' - '}
            {' '}
            {parsedIncorrectAnswer3[idx]}
          </div>
        </>
      ))}
    </div>
  );
};
