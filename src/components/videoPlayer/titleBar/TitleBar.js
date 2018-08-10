import React, { Component } from 'react';


class TitleBar extends Component {

    handleClose = () => {
        const player = this.props.vjsComponent.player();
        if(player) {
            player.dispose();
        }
    }
    render() { 
        return (
            <div className='vjs-title-bar'>         
                {this.props.body}
                <button style={{float: 'right'}} onClick={this.handleClose}>X</button>
            </div>
          );
    }
}
 
export default TitleBar;
