import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/videoPlayer/VideoPlayer';

class App extends Component {


  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      fluid: true,
      sources: [{
        src: 'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4',
        type: 'video/mp4'
      },
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }]
    }
    return (
      <div className="App">
         <VideoPlayer { ...videoJsOptions } />
      </div>
    );
  }
}

export default App;
