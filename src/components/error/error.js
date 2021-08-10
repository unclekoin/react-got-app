import React from 'react';
import './error.css';
import img from './error.png'

const Error = () => {
  return (
    <div
      className="error">
      <img src={ img } alt="Error"/>
      Something went wrong!
    </div>
  );
};

export default Error;
