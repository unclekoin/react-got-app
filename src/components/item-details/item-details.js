import React, { Component } from 'react';
import './item-details.css';
import CardWrapper from '../card-wrapper';
import './item-details.css';
import APIService from '../../services/api-service';

export default class ItemDetails extends Component {

  service = new APIService('https://www.anapioficeandfire.com/api');
  state = {
    data: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedId !== prevProps.selectedId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { selectedId, getData } = this.props;
    if (!selectedId) return;

    getData(selectedId)
      .then((data) => {
        this.setState({ data });
      });
  };

  render() {
    if (!this.state.data) {
      return <span>Please select something!</span>
    }
    const { data } = this.state;

    const list = Object.keys(data).map((item) => {
      return (
        <li key={item}  className="item-details__item">
          <span className="item-details__term">{ item[0].toUpperCase() + item.slice(1) }:</span>
          <span>{ data[item] && (typeof data[item] === 'string') ? data[item] : 'no data available' }</span>
        </li>
      )
    })

    return (
      <CardWrapper>
        <div>
          <div className="item-details">
            <h4 className="item-details__title">Selected Item Details: <span>{ data.name || 'no data available' }</span></h4>
            <ul className="item-details__list">
              { list }
            </ul>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
