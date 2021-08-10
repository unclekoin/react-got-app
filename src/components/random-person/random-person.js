import React, { Component } from 'react';
import APIService from '../../services/api-service';
import './random-person.css';
import CardWrapper from '../wrapper';

export default class RandomPerson extends Component {

  constructor(props) {
    super(props);

    this.updateCharacter();
  }

  service = new APIService('https://www.anapioficeandfire.com/api');


  state = {
    character: {}
  };

  onCharacterLoader = (character) => {
    this.setState({ character });
  };

  updateCharacter() {
    const id = Math.floor(Math.random() * 140 + 25);
    this.service.getCharacter(id)
      .then(this.onCharacterLoader);
  };

  render() {
    const { name, gender, born, died, culture } = this.state.character;

    return (
      <CardWrapper>
        <div className="random-person">
          <h4 className="random-person__title">Random Character: { name }</h4>
          <ul className="random-person__list">
            <li className="random-person__item">
              <span className="random-person__term">Gender: </span>
              <span>{ gender }</span>
            </li>
            <li className="random-person__item">
              <span className="random-person__term">Born: </span>
              <span>{ born }</span>
            </li>
            <li className="random-person__item">
              <span className="random-person__term">Died: </span>
              <span>{ died }</span>
            </li>
            <li className="random-person__item">
              <span className="random-person__term">Culture: </span>
              <span>{ culture }</span>
            </li>
          </ul>
        </div>
      </CardWrapper>
    );
  }
}
