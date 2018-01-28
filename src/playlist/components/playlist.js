import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import './playlist.css';

const Playlist = (props) => {
  const { data } = props;
  const playlist = data.categories[0].playlist;
  return (
    <div className="Playlist">
      {
        playlist.map((item, index) => (
          <Media {...item} key={item.id} />
        ))
      }
    </div>
  );
}

Playlist.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Playlist;
