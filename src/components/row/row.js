import React from 'react';
import './row.css';

const Row = ({ children, size }) => {
  const cls = size ? `row ${size}` : 'row';
  return (
    <div className={cls}>
      { children }
    </div>
  );
};

export default Row;
