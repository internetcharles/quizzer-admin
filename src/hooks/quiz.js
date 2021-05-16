/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { getQuizzes } from '../services/quiz-api';

export const useQuizzes = () => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes()
      .then((fetchedQuizzes) => setQuizzes(fetchedQuizzes))
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    quizzes,
  };
};
