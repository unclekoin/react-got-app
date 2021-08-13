import React, { Component } from 'react';
import DataList from '../data-list';
import ItemDetails from '../item-details';
import Error from '../error';
import CardWrapper from '../card-wrapper';
import APIService from '../../services/api-service';
import Row from '../row';

export default class PersonsPage extends Component {

  service = new APIService();

  state = {
    selectedId: 130,
    error: false
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    const { selectedId, error } = this.state;

    if (error) return <CardWrapper><Error/></CardWrapper>;

    return (
        <Row>
          <DataList
            onItemSelected={ this.onItemSelected }
            getData={ this.service.getAllCharacters }
            renderItem={ (item) => `${ item.name } (${ item.gender })` }
          />
          <ItemDetails
            selectedId={ selectedId }
            getData={ this.service.getCharacter }
          />
        </Row>
    );
  }
}
