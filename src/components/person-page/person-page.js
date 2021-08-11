import React, { Component, Fragment } from 'react';
import PersonsList from '../persons-list';
import PersonDetails from '../person-details';
import Error from '../error';
import CardWrapper from '../card-wrapper';

export default class PersonPage extends Component {

  state = {
    selectedId: 130,
    error: false
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onCharacterSelected = (id) => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    const { selectedId, error } = this.state;

    if (error) return <CardWrapper><Error/></CardWrapper>;

    return (
      <Fragment>
        <PersonsList onCharacterSelected={ this.onCharacterSelected }/>
        <PersonDetails selectedId={ selectedId }/>
      </Fragment>
    )
  }
}
