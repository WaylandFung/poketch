import app0_0 from './app0/app0_0.png'
import app0_1 from './app0/app0_1.png'
import app0_2 from './app0/app0_2.png'
import app0_3 from './app0/app0_3.png'
import app0_4 from './app0/app0_4.png'
import app0_5 from './app0/app0_5.png'
import app0_6 from './app0/app0_6.png'
import app0_7 from './app0/app0_7.png'
import app0_8 from './app0/app0_8.png'
import app0_9 from './app0/app0_9.png'
import pika from './app0/app0_pikachu.png'
import dot from './app0/app0_dot.png'

import './App.css'

import React, {Component } from 'react';

export class App0_clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
          time: new Date(),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }

    tick(){
        this.setState({
            time: new Date()
        });
        
    }

    hourSlot(num){
        
        return (
            <div>
                <img className = "Hours0" src={this.getImageNumber(parseInt(Math.floor(num/10)))}/>
                <img className = "Hours1" src={this.getImageNumber(parseInt(num%10))}/>
            </div>
        )
    }

    minuteSlot(num){
        
        return (
            <div>
                <img className = "Minutes0" src={this.getImageNumber(parseInt(Math.floor(num/10)))}/>
                <img className = "Minutes1" src={this.getImageNumber(parseInt(num%10))}/>
            </div>
        )
    }

    getImageNumber(num){
        switch(num){
            case 0:
                return app0_0
            
            case 1:
                return app0_1
            
            case 2:
                return app0_2
                
            case 3:
                return app0_3

            case 4:
                return app0_4
            
            case 5:
                return app0_5

            case 6:
                return app0_6
            
            case 7:
                return app0_7

            case 8:
                return app0_8
                
            case 9:
                return app0_9
            
            
        }
    }

    render(){
        return(
            
            <div className = "Clock-Display">
                {this.hourSlot(this.state.time.getHours())}
                {this.minuteSlot(this.state.time.getMinutes())}
                <img className = "Top-Colon" src={dot}/>
                <img className = "Bottom-Colon" src={dot}/>
                <img className = "Pika-Clock" src={pika}/>
            </div>
            
        );
    }



}