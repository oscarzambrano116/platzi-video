import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Media from '../components/media';

class MediaContainer extends Component {
  render() {
    const {
      data,
      openModal,
    } = this.props
    return (
      <Media
        {...data}
        openModal={openModal}
      />
    );
  }
}

MediaContainer.propTypes = {
  data: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,

};

function mapStateToProps(state, props) {
  return {
    data: state.data.entities.media[props.id],
  }
}

export default connect(mapStateToProps)(MediaContainer);
