import React, { Component} from 'react';
import APIService from '../../services/api-service';
import ItemDetails from '../item-details';

export default class BookPage extends Component {

  service = new APIService();

  render() {

    return (
      <div className='book-page'>
        <ItemDetails
          selectedId={ this.props.bookId }
          getData={ this.service.getBook }
        />
      </div>
    )
  }
}
