import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value);
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
export default SearchContainer;
