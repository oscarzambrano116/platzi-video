import React from 'react';
import Media from './media';
import './playlist.css';

const Playlist = (props) => {
  const { playlist } = props;
  return (
    <div className="Playlist">
      {
        playlist.map((item) => (
          <Media {...item} key={item.id} />
        ))
      }
    </div>
  );
}

export default Playlist;
