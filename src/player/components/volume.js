import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import MuteIcon from '../../icons/components/mute';
import './volume.css';

const Volume = (props) => (
  <div className="Volume">
    <div onClick={props.checkVolumeIsMute}>
      { props.volumeIsMute ? <MuteIcon/> : <VolumeIcon /> }
    </div>
    <div className="Volume-range">
      <input
        type="range"
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumeChange}
        value={props.volumeValue}
      />
    </div>
  </div>
);

export default Volume;
