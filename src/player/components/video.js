import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  setRef = (element) => {
    this.video = element;
  }

  tooglePlay = () => {
    const { pause } = this.props;
    if (pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pause } = this.props;
    if (nextProps.pause !== pause) {
      this.tooglePlay();
    }
  }

  render() {
    const {
      autoPlay,
      pause,
      src,
      handleLoadedMetadata,
    } = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={autoPlay}
          src={src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    );
  }
}

export default Video;
