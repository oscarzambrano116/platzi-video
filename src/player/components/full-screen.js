import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = (props) => (
  <div
    className="FullScreen"
    onClick={props.handleFullScreen}
  >
    <FullScreenIcon />
  </div>
);

export default FullScreen;
