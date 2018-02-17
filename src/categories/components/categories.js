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
    isLoading,
  } = props;
  const searchList = (
    search.map((item) => {
      return (
        <Media
          key={item.get('id')}
          {...item.toJS()}
          openModal={handleOpenModal}
        />
      )
    })
  );
  const allCategories = (
    categories.map((item) => {
      return (
        <Category
          key={item.get('id')}
          {...item.toJS()}
          handleOpenModal={handleOpenModal}
        />
      )
    })
  )
  return (
    <div className="Categories">
      <SearchContainer />
      { isLoading && <p>{'Buscando tus videos favoritos...'}</p>}
      {searchList}
      {allCategories}
    </div>
  );
}

export default Categories;
