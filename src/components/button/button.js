import React from 'react';
import './button.css';

const Button = ({ children, onToggleComponent }) => {
  return (
    <button onClick={ onToggleComponent } className="button">
      { children }
    </button>
  );
};

export default Button;
