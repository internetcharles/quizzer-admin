/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuiz } from '../../hooks/quiz';

export const Quiz = () => {
  const { id } = useParams();
  const { loading, quiz } = useQuiz(id);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {console.log(quiz)}
    </div>
  );
};
