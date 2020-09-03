import frame from './frame/watch_frame.png'
import topUnpressed from './frame/watch_button_top_unpressed.png'
import bottomUnpressed from './frame/watch_button_bottom_unpressed.png'

import './App.css'
import {Watch_frame_buttons} from './Watch_frame_buttons';

import React, {Component } from 'react';

export class Watch_frame extends Component{

    

    

    render(){
        
        return(
            <div > 
                <img className = 'Top-Button' src = {topUnpressed}/>
                <img className = 'Bottom-Button' src = {bottomUnpressed}/>
                <img className = 'default' src={frame}/>
                <Watch_frame_buttons data={{
                changeApp: this.props.data.changeApp}}/>
            </div>
        );
    }
}
