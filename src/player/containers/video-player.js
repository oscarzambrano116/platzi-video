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
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
    volumeIsMute: false,
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

  checkVolumeIsMute = () => {
    const {
      volumeIsMute,
      prevVolume,
    } = this.state;
    const checkMute = !volumeIsMute;
    if (checkMute) {
      this.setState({
        prevVolume: this.video.volume,
        volumeIsMute: !volumeIsMute,
        volume: 0,
      }, () => {
        this.video.volume = 0;
      })
    } else {
      this.setState({
        volumeIsMute: !volumeIsMute,
        volume: prevVolume,
      }, () => {
        this.video.volume = prevVolume;
      });
    }
  }

  handleFullScreen = (event) => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }

  setRef = (element) => {
    this.player = element;
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
      volumeIsMute,
    } = this.state;
    const {
      title,
      autoPlay,
      src,
    } = this.props;
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title
          title={title}
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
            volumeIsMute={volumeIsMute}
            volumeValue={volume}
            handleVolumeChange={this.handleVolumeChange}
            checkVolumeIsMute={this.checkVolumeIsMute}
          />
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        { loading && <Spinner /> }
        <Video
          autoPlay={autoPlay}
          pause={pause}
          src={src}
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
