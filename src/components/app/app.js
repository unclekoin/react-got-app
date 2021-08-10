import React from 'react';
import Header from '../header';
import './app.css';
import RandomPerson from '../random-person';

const App = () => {

  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <RandomPerson/>
      </div>
    </div>
  );
};

export default App;
