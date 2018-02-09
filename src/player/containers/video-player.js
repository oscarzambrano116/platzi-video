import React, { Component } from 'react';
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
  };

  toggleClick = () => {
    const { pause } = this.state;
    this.setState({
      pause: !pause,
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  componentDidMount() {
    const { autoPlay } = this.props;
    this.setState({
      pause: !autoPlay,
    })
  }

  render() {
    const { pause, duration } = this.state;
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
            duration={duration}
          />
        </Controls>
        <Video
          autoPlay={autoPlay}
          pause={pause}
          src={'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}
          handleLoadedMetadata={this.handleLoadedMetadata}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
