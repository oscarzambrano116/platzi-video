import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';
import SearchContainer from '../../widgets/containers/search';
import './categories.css';

function Categories(props) {
  const {
    categories,
    handleOpenModal,
  } = props;
  return (
    <div className="Categories">
      <SearchContainer />
      {
        categories.map((item) => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={handleOpenModal}
            />
          )
        })
      }
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Categories;
