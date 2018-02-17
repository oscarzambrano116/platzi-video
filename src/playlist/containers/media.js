import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Media from '../components/media';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {

  openModal = (id) => {
    const { actions } = this.props;
    actions.openModal(id);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
