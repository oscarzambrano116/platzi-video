import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props) {
  const {
    description,
    title,
    playlist,
    handleOpenModal,
  } = props;
  return (
    <div className="Category">
      <p className="Category-description">{description}</p>
      <h2 className="Category-title">{title}</h2>
      <Playlist
        playlist={playlist}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}

Category.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Category;
