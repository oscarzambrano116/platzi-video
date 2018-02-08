import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
  state = {
    pause: true,
  };

  toggleClick = () => {
    const { pause } = this.state;
    this.setState({
      pause: !pause,
    });
  }

  componentDidMount() {
    const { autoPlay } = this.props;
    this.setState({
      pause: !autoPlay,
    })
  }

  render() {
    const { pause } = this.state;
    const { autoPlay } = this.props;
    return (
      <VideoPlayerLayout>
        <Title
          title={'Esto es un video'}
        />
        <PlayPause
          pause={pause}
          handleClick={this.toggleClick}
        />
        <Video
          autoPlay={autoPlay}
          pause={pause}
          src={'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
