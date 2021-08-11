import React, { Component } from 'react';
import './persons-list.css';
import APIService from '../../services/api-service';
import CardWrapper from '../card-wrapper';
import Loader from '../loader';

export default class PersonsList extends Component {

  service = new APIService('https://www.anapioficeandfire.com/api');

  state = {
    characterList: null
  };

  componentDidMount() {
    this.service
      .getAllCharacters()
      .then((characterList) => this.setState({ characterList }));
  }

  createList = (array) => {
    return array.map((item, index) => {
      return (<li
          className="persons-list__item"
          onClick={ () => this.props.onCharacterSelected(41 + index) }
          key={ array.length - index }>
          { item.name }
        </li>
      );
    });
  };

  render() {
    const { characterList } = this.state;

    const content = !characterList ? <Loader/> : this.createList(characterList);

    return (
      <CardWrapper>
        <ul className="persons-list">
          { content }
        </ul>
      </CardWrapper>
    );
  }
}
