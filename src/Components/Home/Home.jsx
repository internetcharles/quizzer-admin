/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuizzes } from '../../hooks/quiz';

export const Home = () => {
  const { loading, quizzes } = useQuizzes();

  if (loading) return <h1>Loading...</h1>;

  const quizList = quizzes.map((quiz) => (
    <li key={quiz.id}>
      <Link to={`/${quiz.id}`}>
        <h2>{quiz.title}</h2>
        <h2>{quiz.description}</h2>
      </Link>
    </li>
  ));

  return (
    <div>
      {quizList}
    </div>
  );
};
