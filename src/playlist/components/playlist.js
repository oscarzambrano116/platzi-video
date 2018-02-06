import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import './playlist.css';

const Playlist = (props) => {
  const {
    playlist,
    handleOpenModal
  } = props;
  return (
    <div className="Playlist">
      {
        playlist.map((item) => (
          <Media
            {...item}
            key={item.id}
            handleClick={handleOpenModal}
          />
        ))
      }
    </div>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Playlist;
