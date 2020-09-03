import app1_button_0 from './app1/app1_button_0.png'
import app1_button_1 from './app1/app1_button_1.png'
import app1_button_2 from './app1/app1_button_2.png'
import app1_button_3 from './app1/app1_button_3.png'
import app1_button_4 from './app1/app1_button_4.png'
import app1_button_5 from './app1/app1_button_5.png'
import app1_button_6 from './app1/app1_button_6.png'
import app1_button_7 from './app1/app1_button_7.png'
import app1_button_8 from './app1/app1_button_8.png'
import app1_button_9 from './app1/app1_button_9.png'

import app1_button_add from './app1/app1_button_add.png'
import app1_button_subtract from './app1/app1_button_subtract.png'
import app1_button_multiply from './app1/app1_button_multiply.png'
import app1_button_divide from './app1/app1_button_divide.png'
import app1_button_clear from './app1/app1_button_clear.png'
import app1_button_decimal from './app1/app1_button_decimal.png'
import app1_button_equal from './app1/app1_button_equal.png'

import app1_button_frame_small_top from './app1/app1_button_frame_small_top.png'
import app1_button_frame_small_bottom from './app1/app1_button_frame_small_bottom.png'
import app1_button_frame_small_line from './app1/app1_button_frame_small_line.png'
import app1_button_frame_large_top from './app1/app1_button_frame_large_top.png'
import app1_button_frame_large_bottom from './app1/app1_button_frame_large_bottom.png'
import app1_button_frame_large_line from './app1/app1_button_frame_large_line.png'

import './App.css'
import React, {Component} from 'react';
export class App1_calculator_button extends Component{

    constructor(props){
        super(props)
        this.state = {
            value: null,
            xcord: null,
            ycord: null,
            topLineOpacity: .7,
            bottomLineOpacity: .5
        };

    }

    getAlert(){
        alert('y')
    }

    setStateValues(value, xcord, ycord){
        this.setState({
            value: value,
            xcord: xcord,
            ycord: ycord
        })
    }


    getButtonImage(symbol){
        switch(symbol){
            case 0:
                return app1_button_0
            
            case 1:
                return app1_button_1
            
            case 2:
                return app1_button_2
                
            case 3:
                return app1_button_3

            case 4:
                return app1_button_4
            
            case 5:
                return app1_button_5

            case 6:
                return app1_button_6
            
            case 7:
                return app1_button_7

            case 8:
                return app1_button_8
                
            case 9:
                return app1_button_9

            case 'c':
                return app1_button_clear

            case '+':
                return app1_button_add

            case '-':
                return app1_button_subtract

            case '*':
                return app1_button_multiply

            case '/':
                return app1_button_divide

            case '.':
                return app1_button_decimal

            case '=':
                return app1_button_equal
        }
        
    }

    render(){
        return(
            <div style = {{position: "absolute"}}
            
            >
                
                {(this.state.value != 0) && (this.state.value != '=') && (this.state.value !='=') && (this.state.value !='c')? 
                <div> 
                    <img src={app1_button_frame_small_top}  style={{left: this.state.xcord, top: this.state.ycord, width: 30*this.state.dimMultiplier, position: "absolute"}}/> 
                    <img src={app1_button_frame_small_bottom} style={{left: this.state.xcord, top: this.state.ycord, width: 30*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_small_line} style={{left: this.state.xcord + (2*this.state.dimMultiplier), top: this.state.ycord + (24*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: 1, position: "absolute"}}/>
                    <img src={app1_button_frame_small_line} style={{left: this.state.xcord + (2*this.state.dimMultiplier), top: this.state.ycord + (26*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: 1, position: "absolute"}}/>
                </div>
                :
                <div>
                    <img src={app1_button_frame_large_top} style={{left: this.state.xcord, top: this.state.ycord, width: 62*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_large_bottom} style={{left: this.state.xcord, top: this.state.ycord, width: 62*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_large_line} style={{left: this.state.xcord + (2*this.state.dimMultiplier), top: this.state.ycord + (24*this.state.dimMultiplier), width: 58*this.state.dimMultiplier, opacity: .7, position: "absolute"}}/>
                    <img src={app1_button_frame_large_line} style={{left: this.state.xcord + (2*this.state.dimMultiplier), top: this.state.ycord + (26*this.state.dimMultiplier), width: 58*this.state.dimMultiplier, opacity: .5, position: "absolute"}}/>
                </div>}
                
                <img src={this.getButtonImage(this.state.value)} 
                
                style={{left: this.state.xcord + (2*this.state.dimMultiplier), top: this.state.ycord + (2*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: .7, position: "absolute"}}/> 
            </div>
        )
    }

}