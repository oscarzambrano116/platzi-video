import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';

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

  render() {
    const {
      data: {
        categories,
      },
    } = this.props;
    const { modalVisible } = this.state;
    return(
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
    );
  }
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
