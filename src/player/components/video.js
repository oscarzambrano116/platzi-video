import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  setRef = (element) => {
    this.video = element;
  }

  tooglePlay = () => {
    const { pause } = this.props;
    pause ? this.video.play() : this.video.pause();
  }

  componentWillReceiveProps(nextProps) {
    const { pause } = this.props.pause;
    if (nextProps.pause !== pause) {
      this.tooglePlay();
    }
  }

  render() {
    const {
      autoPlay,
      pause,
      src,
    } = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={autoPlay}
          src={src}
          ref={this.setRef}
        />
      </div>
    );
  }
}

export default Video;
