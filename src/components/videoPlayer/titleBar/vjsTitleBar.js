import TitleBar from './TitleBar';
import ReactDOM from 'react-dom';
import videojs from 'video.js';
import React from 'react';
import '../VideoPlayer.css';

const vjsComponent = videojs.getComponent('Component');

class vjsTitleBar extends vjsComponent{

  constructor(player, options) {
    super(player, options);

    /* Bind the current class context to the mount method */
    this.mount = this.mount.bind(this);

    /* When player is ready, call method to mount React component */
    player.ready(() => {
      this.mount();
    });

    /* Remove React root when component is destroyed */
    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });
  }

  /**
   * We will render out the React EpisodeList component into the DOM element
   * generated automatically by the VideoJS createEl() method.
   *
   * We fetch that generated element using `this.el()`, a method provided by the
   * vjsComponent class that this class is extending.
   */
    mount() {
      let title = this.player_.cache_.source.src.slice(this.player_.cache_.source.src.lastIndexOf('/') + 1);
      ReactDOM.render(<TitleBar vjsComponent={this} body={title} />, this.el() );
    }
  }

// Register the component with Video.js, so it can be used in players.
vjsComponent.registerComponent('vjsTitleBar', vjsTitleBar);

export default vjsTitleBar;

