import topPressed from './frame/watch_button_top_pressed.png'
import bottomPressed from './frame/watch_button_bottom_pressed.png'

import './App.css'

import React, {Component } from 'react';

export class Watch_frame_buttons extends Component{
    constructor(props){
        super(props)
        this.state = {
            topButtonOpacity: 0,
            bottomButtonOpacity: 0,
            
        };
    }
    topButtonClicked = () =>{
        this.setState({
            topButtonOpacity: 1
        })
    }

    topButtonReleased = () =>{
        this.setState({
            topButtonOpacity: 0
        })
        
        this.props.data.changeApp(1);
            
        
    }

    bottomButtonClicked = () =>{
        this.setState({
            bottomButtonOpacity: 1
        })

        
    }

    bottomButtonReleased = () =>{
        this.setState({
            bottomButtonOpacity: 0
        })
        this.props.data.changeApp(-1);
    }

    render(){
        return(
            <div>
                <img className = 'Top-Button' 
                 src = {topPressed} 
                 style={{opacity: this.state.topButtonOpacity}}
                 onMouseDown={this.topButtonClicked}
                 onMouseUp={this.topButtonReleased}/>

                <img className = 'Bottom-Button' 
                 src = {bottomPressed} 
                 style={{opacity: this.state.bottomButtonOpacity}}
                 onMouseDown={this.bottomButtonClicked}
                 onMouseUp={this.bottomButtonReleased}/> 
            </div>
        );
    }
}