/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postQuiz } from '../../services/quiz-api';
import Question from './Question';
import styles from './Form.module.css';

export const Form = () => {
  const history = useHistory();

  const blankQuestion = {
    question: '',
    correctAnswer: '',
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [questionState, setQuestionState] = useState([
    { ...blankQuestion },
  ]);

  const addQuestion = () => {
    setQuestionState([...questionState, { ...blankQuestion }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questions = [];
    const correctAnswers = [];
    const incorrectAnswers1 = [];
    const incorrectAnswers2 = [];
    const incorrectAnswers3 = [];

    questionState.forEach((question) => {
      questions.push(question.question);
      correctAnswers.push(question.correctAnswer);
      incorrectAnswers1.push(question.incorrectAnswer1);
      incorrectAnswers2.push(question.incorrectAnswer2);
      incorrectAnswers3.push(question.incorrectAnswer3);
    });

    const formattedQuiz = {
      title,
      description,
      questions: JSON.stringify(questions),
      correctAnswers: JSON.stringify(correctAnswers),
      incorrectAnswer1: JSON.stringify(incorrectAnswers1),
      incorrectAnswer2: JSON.stringify(incorrectAnswers2),
      incorrectAnswer3: JSON.stringify(incorrectAnswers3),
    };

    await postQuiz(formattedQuiz);
    history.push('/');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuestionChange = (e) => {
    const updatedQuestions = [...questionState];
    updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
    setQuestionState(updatedQuestions);
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.newQuiz}>
          New Quiz
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.titleDescription}>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Quiz Title"
              onChange={handleTitleChange}
              className={styles.title}
            />
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Quiz Description"
              onChange={handleDescriptionChange}
              className={styles.description}
            />
          </div>
          <div className={styles.questions}>
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
          </div>
          <input type="button" value="Add New Question" onClick={addQuestion} />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default Form;
