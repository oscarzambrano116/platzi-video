import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  render() {
    const {
      autoPlay,
      src,
    } = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={autoPlay}
          src={src}
        />
      </div>
    );
  }
}

export default Video;
