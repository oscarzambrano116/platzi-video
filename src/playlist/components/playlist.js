import React from 'react';
import PropTypes from 'prop-types';
import MediaContainer from '../containers/media';
import './playlist.css';

const Playlist = (props) => {
  const {
    playlist,
    handleOpenModal
  } = props;
  return (
    <div className="Playlist">
      {
        playlist.map((mediaId) => (
          <MediaContainer
            key={mediaId}
            id={mediaId}
            openModal={handleOpenModal}
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
