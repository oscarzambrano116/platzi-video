import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';
import Volume from '../../icons/components/volume';

const Playlist = (props) => {
  const { data } = props;
  const playlist = data.categories[0].playlist;
  return (
    <div className="Playlist">
      <Play
        size={50}
        color={'red'}
      />
      <Pause
        size={50}
        color={'blue'}
      />
      <FullScreen
        size={50}
        color={'green'}
      />
      <Volume
        size={50}
        color={'black'}
      />
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
