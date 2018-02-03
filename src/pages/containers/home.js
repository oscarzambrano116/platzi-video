import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';

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
      </HomeLayout>
    );
  }
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
