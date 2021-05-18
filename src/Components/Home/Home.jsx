/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuizzes } from '../../hooks/quiz';
import { deleteQuiz } from '../../services/quiz-api';
import styles from './Home.module.css';

export const Home = () => {
  const { loading, quizzes } = useQuizzes();

  const handleDelete = (id) => {
    deleteQuiz(id);
    window.location.reload();
  };

  if (loading) return <h1>Loading...</h1>;

  const quizList = quizzes.map((quiz) => (
    <li className={styles.item} key={quiz.id}>
      <Link to={`/quizzes/${quiz.id}`}>
        <h2>
          Title:
          {' '}
          {quiz.title}
        </h2>
        <h2>
          Description:
          {' '}
          {quiz.description}
        </h2>
      </Link>
      <button type="button" onClick={() => handleDelete(quiz.id)}>Delete</button>
    </li>
  ));

  return (
    <div className={styles.quizList}>
      <ul className={styles.quizUl}>
        {quizList}
      </ul>
    </div>
  );
};
