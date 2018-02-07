import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  state = {
    modalVisible: false,
  };

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true,
    });
  }

  handleCloseModal= (event) => {
    this.setState({
      modalVisible: false,
    });
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    });
  }

  render() {
    const {
      data: {
        categories,
      },
    } = this.props;
    const {
      modalVisible,
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
                  <h1>Esto es un portal</h1>
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
  data: PropTypes.object.isRequired,
};

export default Home;
