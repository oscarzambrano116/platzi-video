import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';

class Home extends Component {
  render() {
    const {
      data: {
        categories,
      },
    } = this.props;
    return(
      <HomeLayout>
        <Related />
        <Categories categories={categories} />
        <ModalContainer>
          <h1>Esto es un portal</h1>
        </ModalContainer>
      </HomeLayout>
    );
  }
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
