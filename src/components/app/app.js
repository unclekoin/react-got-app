import React, { Component } from 'react';
import Header from '../header';
import './app.css';
import RandomPerson from '../random-person';
import Button from '../button';
import Error from '../error';
import PersonPage from '../person-page';

export default class App extends Component {

  state = {
    visible: true,
    error: false
  };

  componentDidCatch(error, errorInfo) {
    console.log('ERROR:', error, 'info', errorInfo);
    console.log('INFO:', errorInfo);
    this.setState({ error: true });
  }

  toggleComponent = () => {
    this.setState((state) => ({
      visible: !state.visible
    }));
  };

  render() {
    const { visible, error } = this.state;

    if (error) return <Error/>;

    return (
      <div className="app">
        <Header/>
        <div className="app__wrapper">
          { visible ? <RandomPerson/> : null }
          <Button onToggleComponent={ this.toggleComponent }>
            { visible ? 'Remove Random Character' : 'Show Random Character' }
          </Button>
          <PersonPage/>
        </div>
      </div>
    );
  }
};
