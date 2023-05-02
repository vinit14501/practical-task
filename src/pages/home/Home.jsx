import React from 'react';
import './home.scss';

const Home = ({ username, email }) => {
  return (
    <div className="homeContainer">
      <span>{username}</span>
      <span>{email}</span>
    </div>
  );
};

export default Home;
