/* eslint-disable import/prefer-default-export */
const fetch = require('node-fetch');

const URL = 'http://localhost:7890';

export const postQuiz = (quiz) => fetch(`${URL}/api/quizzes`, {
  method: 'POST',
  body: JSON.stringify(quiz),
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((res) => console.log(res));

export const getQuizzes = () => fetch(`${URL}/api/quizzes`)
  .then((res) => res.json());

export const getQuiz = (id) => fetch(`${URL}/api/quizzes/${id}`)
  .then((res) => res.json());

export const deleteQuiz = (id) => fetch(`${URL}/api/quizzes/${id}`, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((res) => console.log(res));
