import React, { Component } from 'react';
import videojs from 'video.js';
import 'C:/Users/yzhuk/Documents/React/video-player-poc/node_modules/video.js/dist/video-js.css';
import vjsTitleBar from './titleBar/vjsTitleBar';
// import vjsEpisodeList from './episodeList/vjsEpisodeList';
import './VideoPlayer.css';

class VideoPlayer extends Component {
    state = { 
      playerContainerStyle: { width: '160px',
                              height: '90px', 
                              position: 'absolute', 
                              left: 50, 
                              bottom: 50} 
    }
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {  
          console.log('onPlayerReady', this)
        });
        this.player.addChild('vjsTitleBar', {});
      } 
      // destroy player on unmount
      componentWillUnmount() {
        if (this.player) {
          this.player.dispose()
        }
      }
      handleClick = () => {
        const hasStartedStyle = {
          width: '512px',
          height: '288px',
          position: 'absolute',
          right: 30,
          bottom: 30
        }
        if(this.player.hasStarted) {
          this.setState({
            playerContainerStyle: hasStartedStyle
          })
        }

      }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
      
        return (
        <div onClick={this.handleClick} style={this.state.playerContainerStyle}>    
            <div data-vjs-player>
            <video ref={ node => this.videoNode = node } className="video-js vjs-big-play-centered">
             </video>
            </div>
        </div>
        )
    }
    }
 
export default VideoPlayer;