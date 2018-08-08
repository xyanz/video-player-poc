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
        src: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4',
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
