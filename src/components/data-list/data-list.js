import React, { Component } from 'react';
import './data-list.css';
import CardWrapper from '../card-wrapper';
import Loader from '../loader';

export default class DataList extends Component {

  state = {
    dataList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((dataList) => this.setState({ dataList }));
  }

  createList = (array) => {
    return array.map((item) => {
      const label = this.props.renderItem(item);

      return (
        <li
          className="data-list__item"
          onClick={ () => this.props.onItemSelected( item.id ) }
          key={ item.id }>
          { label }
        </li>
      );
    });
  };

  render() {
    const { dataList } = this.state;

    const content = !dataList ? <Loader/> : this.createList(dataList);

    return (
      <CardWrapper>
        <ul className="data-list">
          { content }
        </ul>
      </CardWrapper>
    );
  }
}
