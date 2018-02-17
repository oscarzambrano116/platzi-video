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

class Home extends Component {
  state = {
    modalVisible: false,
    media: null,
  };

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media,
    });
  }

  handleCloseModal= (event) => {
    this.setState({
      modalVisible: false,
      media: null,
    });
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    });
  }

  render() {
    const {
      categories,
      search,
    } = this.props;
    const {
      modalVisible,
      media,
    } = this.state;
    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            handleOpenModal={this.handleOpenModal}
            categories={categories}
            search={search}
          />
          {
            modalVisible && (
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                >
                  <VideoPlayer
                    title={media.title}
                    autoPlay
                    src={media.src}
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
  }
}

export default connect(mapStateToProps)(Home);
