import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useQuizzes } from '../../hooks/quiz';
import styles from './Sidebar.module.css';

function Sidebar() {
  const { loading, quizzes } = useQuizzes();
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className={styles.fillObject} />
      <div className={styles.whiteObject} />
      <div className={styles.sidebar}>
        <h1>QUIZZER</h1>
        <Link to="/quizform">
          New Quiz
          {' '}
          <FaIcons.FaPencilAlt />
        </Link>
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.navMenuItems}>
          <div className={styles.quizHeader}>
            Quizzes
          </div>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link to={`/quizzes/${quiz.id}`}>
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
