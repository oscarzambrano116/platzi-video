import React, { Component } from 'react';
import { formattedTime } from '../../utils/helper';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
  };

  toggleClick = () => {
    const { pause } = this.state;
    this.setState({
      pause: !pause,
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    const duration = formattedTime(this.video.duration);
    this.setState({
      duration,
    });
  }

  handleTimeUpdate = (event) => {
    const currentTime = formattedTime(this.video.currentTime);
    this.setState({
      currentTime,
    });
  }

  componentDidMount() {
    const { autoPlay } = this.props;
    this.setState({
      pause: !autoPlay,
    })
  }

  render() {
    const {
      pause,
      duration,
      currentTime,
    } = this.state;
    const { autoPlay } = this.props;
    return (
      <VideoPlayerLayout>
        <Title
          title={'Esto es un video'}
        />
        <Controls>
          <PlayPause
            pause={pause}
            handleClick={this.toggleClick}
          />
          <Timer
            currentTime={currentTime}
            duration={duration}
          />
        </Controls>
        <Video
          autoPlay={autoPlay}
          pause={pause}
          src={'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
