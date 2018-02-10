import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
    volumeIsMuted: false,
    prevVolume: 0,
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
      duration: this.video.duration,
    });
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime,
    });
  }

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = (event) => {
    this.setState({
      loading: true,
    });
  }

  handleSeeked = (event) => {
    this.setState({
      loading: false,
    });
  }

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
    this.setState({
      volume: this.video.volume,
    });
  }

  checkVolumeIsMuted = () => {
    const {
      volumeIsMuted,
      prevVolume,
    } = this.state;
    const checkMuted = !volumeIsMuted;
    if (checkMuted) {
      this.setState({
        prevVolume: this.video.volume,
        volumeIsMuted: !volumeIsMuted,
        volume: 0,
      }, () => {
        this.video.volume = 0;
      })
    } else {
      this.setState({
        volumeIsMuted: !volumeIsMuted,
        volume: prevVolume,
      }, () => {
        this.video.volume = prevVolume;
      });
    }
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
      loading,
      volume,
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
          <ProgressBar
            duration={duration}
            value={currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            volumeValue={volume}
            handleVolumeChange={this.handleVolumeChange}
            checkVolumeIsMuted={this.checkVolumeIsMuted}
          />
        </Controls>
        { loading && <Spinner /> }
        <Video
          autoPlay={autoPlay}
          pause={pause}
          src={'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
