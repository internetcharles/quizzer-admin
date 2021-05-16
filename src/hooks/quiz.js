/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { getQuiz, getQuizzes } from '../services/quiz-api';

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

export const useQuiz = (id) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState('');

  useEffect(() => {
    getQuiz(id)
      .then((fetchedQuiz) => setQuiz(fetchedQuiz))
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    quiz,
  };
};
