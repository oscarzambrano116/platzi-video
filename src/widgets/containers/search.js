import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
    value: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const query = this.input.value.toLowerCase();
    console.log(query);
    dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query,
      },
    });
  }

  setInputRef = (element) => {
    this.input = element;
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-'),
    });
  }

  render() {
    const { value } = this.state;
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={value}
      />
    );
  }
}
export default connect()(SearchContainer);
