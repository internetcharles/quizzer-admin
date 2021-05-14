/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export const Question = ({
  handleQuestionChange,
  idx,
  questionState,
}) => {
  const questionId = `question-${idx}`;
  const correctAnswerId = `correctAnswer-${idx}`;
  const incorrectAnswer1Id = `incorrectAnswer1-${idx}`;
  const incorrectAnswer2Id = `incorrectAnswer2-${idx}`;
  const incorrectAnswer3Id = `incorrectAnswer3-${idx}`;
  return (
    <div key={`question-${idx}`}>
      <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
      <input
        type="text"
        name={questionId}
        data-idx={idx}
        id={questionId}
        className="question"
        value={questionState[idx].question}
      />
      <label htmlFor={correctAnswerId}>Correct Answer</label>
      <input
        type="text"
        name={correctAnswerId}
        data-idx={idx}
        id={correctAnswerId}
        value={questionState[idx].correctAnswer}
        className="correct-answer"
      />
      <label htmlFor={incorrectAnswer1Id}>Incorrect Answers</label>
      <input
        type="text"
        name={incorrectAnswer1Id}
        data-idx={idx}
        id={incorrectAnswer1Id}
        value={questionState[idx].incorrectAnswers[0]}
        className="correct-answer"
        onChange={handleQuestionChange}
      />
      <input
        type="text"
        name={incorrectAnswer2Id}
        data-idx={idx}
        id={incorrectAnswer2Id}
        value={questionState[idx].incorrectAnswers[1]}
        className="correct-answer"
        onChange={handleQuestionChange}
      />
      <input
        type="text"
        name={incorrectAnswer3Id}
        data-idx={idx}
        id={incorrectAnswer3Id}
        value={questionState[idx].incorrectAnswers[2]}
        className="correct-answer"
        onChange={handleQuestionChange}
      />
    </div>
  );
};

Question.propTypes = {
  idx: PropTypes.number,
  questionState: PropTypes.shape({
    question: '',
    correctAnswer: '',
    incorrectAnswers: [],
  }),
  handleQuestionChange: PropTypes.func,
};

Question.defaultProps = {
  idx: 0,
  questionState: [],
  handleQuestionChange: {},
};

export default Question;
