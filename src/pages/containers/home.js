import React, { Component } from 'react';
import { List as list } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { openModal, closeModal } from '../../actions/index';

class Home extends Component {
  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    });
  }

  handleOpenModal = (id) => {
    const { dispatch } = this.props;
    dispatch(openModal(id));
  }

  handleCloseModal = () => {
    const { dispatch } = this.props;
    dispatch(closeModal());
  }

  render() {
    const {
      categories,
      search,
      modal,
    } = this.props;
    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={categories}
            search={search}
            handleOpenModal={this.handleOpenModal}
          />
          {
            modal.get('visibility') && (
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                >
                  <VideoPlayer
                    autoPlay
                    id={modal.get('mediaId')}
                  />
                </Modal>
              </ModalContainer>
            )
          }
        </HomeLayout>
      </HandleError>
    );
  }
};

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    return state.getIn(['data', 'entities', 'categories', categoryId]);
  });

  let searchResults = list();
  const search = state.getIn(['data', 'search']);
  if (search) {
    const mediaList = state.getIn(['data', 'entities', 'media']);
    searchResults = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search.toLowerCase());
    }).toList();
  }

  return {
    categories,
    search: searchResults,
    modal: state.get('modal'),
  }
}

export default connect(mapStateToProps)(Home);
