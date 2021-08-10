import React from 'react';
import './card-wrapper.css'

const CardWrapper = ({ children }) => {
  return (
    <div className='card-wrapper'>
      { children }
    </div>
  );
};

export default CardWrapper;
