import React, { Component } from 'react';


class TitleBar extends Component {

    handleClose = () => {
        let player = this.props.vjsComponent.player();
        if(player) {
            console.log("Player is ", player)
            player.dispose();
        }
    }
    render() { 
        
        console.log("PROPS ", this.props)
        return (
            <div className='vjs-title-bar'>         
                {this.props.body}
                <button style={{float: 'right'}} onClick={this.handleClose}>X</button>
            </div>
          );
    }
}
 
export default TitleBar;
