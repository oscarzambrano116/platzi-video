import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';
import SearchContainer from '../../widgets/containers/search';
import Media from '../../playlist/components/media';
import './categories.css';

function Categories(props) {
  const {
    categories,
    search,
    handleOpenModal,
  } = props;
  const searchList = (
    search.map((item) => {
      return (
        <Media
          key={item.id}
          {...item}
          openModal={handleOpenModal}
        />
      )
    })
  );
  const allCategories = (
    categories.map((item) => {
      return (
        <Category
          key={item.id}
          {...item}
          handleOpenModal={handleOpenModal}
        />
      )
    })
  )
  return (
    <div className="Categories">
      <SearchContainer />
      {
        search.length ? searchList : allCategories
      }
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Categories;
