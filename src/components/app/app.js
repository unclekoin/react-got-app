import React, { Component } from 'react';
import Header from '../header';
import './app.css';
import RandomPerson from '../random-person';
import Button from '../button';

export default class App extends Component {

  state = {
    visible: true
  };

  buttonHandler = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="app">
        <Header/>
        <div className="app__wrapper">
          { visible ? <RandomPerson/> : null }
          <Button onClick={ this.buttonHandler }>Toggle Random Character</Button>
        </div>
      </div>
    );
  }
};
