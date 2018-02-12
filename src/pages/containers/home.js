import React, { Component } from 'react';
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
            categories={categories}
            handleOpenModal={this.handleOpenModal}
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

Home.propTypes = {
  categories: PropTypes.array.isRequired,
};

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories,
  }
}

export default connect(mapStateToProps)(Home);
