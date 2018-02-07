import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
  state = {
    handleError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
  }

  render() {
    const { handleError } = this.state;
    const { children } = this.props;
    if (handleError) {
      return (
        <RegularError />
      );
    }
    return children;
  }
};

export default HandleError;
