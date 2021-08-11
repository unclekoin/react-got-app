import React, { Component } from 'react';
import APIService from '../../services/api-service';
import './random-person.css';
import CardWrapper from '../card-wrapper';
import Loader from '../loader';
import Error from '../error';

export default class RandomPerson extends Component {

  service = new APIService('https://www.anapioficeandfire.com/api');

  state = {
    character: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateCharacter();
    this.timerId = setInterval(this.updateCharacter, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharacterLoaded = (character) => {
    this.setState({
      character,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.service.getCharacter(id)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
  };

  render() {
    const { character, loading, error } = this.state;

    const loader = loading ? <Loader/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error) ? <Card character={ character }/> : null;

    return (
      <CardWrapper>
        { loader }
        { errorMessage }
        { content }
      </CardWrapper>
    );
  }
}

const Card = ({ character }) => {
  const { name, gender, born, died, culture } = character;

  return (
    <div className="random-person">
      <h4 className="random-person__title">Random Character: <span>{ name || 'no data available' }</span></h4>
      <ul className="random-person__list">
        <li className="random-person__item">
          <span className="random-person__term">Gender: </span>
          <span>{ gender || 'no data available' }</span>
        </li>
        <li className="random-person__item">
          <span className="random-person__term">Born: </span>
          <span>{ born || 'no data available' }</span>
        </li>
        <li className="random-person__item">
          <span className="random-person__term">Died: </span>
          <span>{ died || 'no data available' }</span>
        </li>
        <li className="random-person__item">
          <span className="random-person__term">Culture: </span>
          <span>{ culture || 'no data available' }</span>
        </li>
      </ul>
    </div>
  );
};
