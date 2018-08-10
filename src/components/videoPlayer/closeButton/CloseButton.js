import React, { Component } from 'react';

class CloseButton extends Component {
    render() { 
        return ( 
            <button onClick={this.handleClose} className="vjs-close-button">X</button>
         );
    }
}
 
export default CloseButton;