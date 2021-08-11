import React, { Component } from 'react';
import './person-details.css';
import CardWrapper from '../card-wrapper';
import './person-details.css';
import APIService from '../../services/api-service';

export default class PersonDetails extends Component {

  service = new APIService('https://www.anapioficeandfire.com/api');
  state = {
    character: null,
  };

  componentDidMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedId !== prevProps.selectedId) {
      this.updateCharacter();
    }
  }

  updateCharacter = () => {
    const { selectedId } = this.props;
    if (!selectedId) return;

    this.service
      .getCharacter(selectedId)
      .then((character) => {
        this.setState({ character });
      });
  };

  render() {
    if (!this.state.character) {
      return <span>Please select a character!</span>
    }
    const { name, gender, born, died, culture } = this.state.character;

    return (
      <CardWrapper>
        <div>
          <div className="person-details">
            <h4 className="person-details__title">Selected Character Details: <span>{ name || 'no data available' }</span></h4>
            <ul className="person-details__list">
              <li className="person-details__item">
                <span className="person-details__term">Gender: </span>
                <span>{ gender || 'no data available' }</span>
              </li>
              <li className="person-details__item">
                <span className="person-details__term">Born: </span>
                <span>{ born || 'no data available' }</span>
              </li>
              <li className="person-details__item">
                <span className="person-details__term">Died: </span>
                <span>{ died || 'no data available' }</span>
              </li>
              <li className="person-details__item">
                <span className="person-details__term">Culture: </span>
                <span>{ culture || 'no data available' }</span>
              </li>
            </ul>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
