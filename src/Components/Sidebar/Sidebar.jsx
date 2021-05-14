import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/quizform">
        New Quiz
      </Link>
      <div>
        View Quizzes
      </div>
    </div>
  );
}

export default Home;
