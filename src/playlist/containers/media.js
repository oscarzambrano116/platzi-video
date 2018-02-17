import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Media from '../components/media';
import { openModal } from '../../actions/index';

class MediaContainer extends Component {

  openModal = (id) => {
    const { dispatch } = this.props;
    dispatch(openModal(id));
  }

  render() {
    const {
      data,
      openModal,
    } = this.props
    return (
      <Media
        {...data.toJS()}
        openModal={this.openModal}
      />
    );
  }
}

MediaContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id),
  }
}

export default connect(mapStateToProps)(MediaContainer);
