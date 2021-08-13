import React, { Component } from 'react';
import DataList from '../data-list';
import Error from '../error';
import CardWrapper from '../card-wrapper';
import APIService from '../../services/api-service';
import Row from '../row';
import { withRouter } from 'react-router-dom';

class BooksPage extends Component {

  service = new APIService('https://www.anapioficeandfire.com/api');

  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    // const { selectedId, error } = this.state;
    const { error } = this.state;

    if (error) return <CardWrapper><Error/></CardWrapper>;

    return (
      <Row>
        <DataList
          onItemSelected={ (id) => {
            this.props.history.push(id);
          } }
          getData={ this.service.getAllBooks }
          renderItem={ (item) => item.name }
        />
      </Row>
    );
  }
}

export default withRouter(BooksPage);
