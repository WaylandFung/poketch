import app1_0 from './app1/app1_0.png'
import app1_1 from './app1/app1_1.png'
import app1_2 from './app1/app1_2.png'
import app1_3 from './app1/app1_3.png'
import app1_4 from './app1/app1_4.png'
import app1_5 from './app1/app1_5.png'
import app1_6 from './app1/app1_6.png'
import app1_7 from './app1/app1_7.png'
import app1_8 from './app1/app1_8.png'
import app1_9 from './app1/app1_9.png'
import app1_decimal from './app1/app1_decimal.png'

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

import frame from './app1/app1_frame.png'


import './App.css'
import React, {Component} from 'react';

export class App1_calculator extends Component{

    constructor(props){
        super(props)
        this.state = {
            
            dimMultiplier: getComputedStyle(document.body).getPropertyValue('--dimMuliplier'),
            buttonStates: [
            /*0*/{xcord: (33*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*1*/{xcord: (33*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*2*/{xcord: (65*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*3*/{xcord: (97*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*4*/{xcord: (33*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*5*/{xcord: (65*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*6*/{xcord: (97*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*7*/{xcord: (33*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*8*/{xcord: (65*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*9*/{xcord: (97*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*+*/{xcord: (129*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*-*/{xcord: (161*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (81*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /***/{xcord: (129*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*/*/{xcord: (161*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (113*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*c*/{xcord: (129*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (49*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*.*/{xcord: (97*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5},
            /*=*/{xcord: (129*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycord: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), ycordConstant: (145*getComputedStyle(document.body).getPropertyValue('--dimMuliplier')), topOpacity: .7, bottomOpacity: .5}],
            
            values: [0, 0, ''],
            newNum: true,
            decimal: false,
            decimalMultiplier: 1,
            negative: false,
            displayValues: [],
            displaySymbol: '',
            
        };
        
    }
    

    storeValues=(val)=>{
        let valuesHolder = this.state.values
        if(val =='c'){
            valuesHolder[0] = 0
            valuesHolder[1] = 0
            valuesHolder[2] = ''
            this.setState({
                displaySymbol:''
            })
        }

        else if(valuesHolder[0] == '??????????'){
            return
        }
        
        else{
            switch(val){
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    if(!this.state.newNum){
                        valuesHolder[1] = valuesHolder[0]
                        valuesHolder[0] = 0
                        this.setState({
                            newNum: true,
                        })
                    }
                    if((valuesHolder[0]+'').length<10){
                        if(this.state.decimal){
                            valuesHolder[0] = valuesHolder[0]+val/(10*this.state.decimalMultiplier)
                        }
                        else{
                            valuesHolder[0] = valuesHolder[0]*10 + val
                        }
                    }
                    break

                case '.':
                    this.setState({
                        decimal: true
                    })
                    break

                case '+':
                case '-':
                case '*':
                case '/':
                    valuesHolder[2] = val
                    
                    this.setState({
                        values:valuesHolder,
                        decimal: false,
                        decimalMultiplier: 1,
                        displaySymbol: <img src={this.getButtonImage(val)}/>,
                    })
                    if(this.state.newNum){
                        this.calculate()
                    }
                    this.setState({
                        newNum: false,
                    })
                    break

                case '=':
                    this.calculate()
                    this.setState({
                        newNum: false,
                        decimal: false,
                        decimalMultiplier: 1,
                        displaySymbol: '',
                    })
                    break
                default:
                    break
            }
                    
        }
        this.setState({
            values: valuesHolder
        })
    }

    calculate=()=>{
        
        let valuesHolder = this.state.values
        let numHolder = valuesHolder[0]
        switch(valuesHolder[2]){
            case '+':
                valuesHolder[0] = valuesHolder[1]+valuesHolder[0]
                break
            case '-':
                valuesHolder[0] = valuesHolder[1]-valuesHolder[0]
                break
            case '*':
                valuesHolder[0] = valuesHolder[1]*valuesHolder[0]
                break
            case '/':
                if(valuesHolder[0] == 0){
                    valuesHolder[0] = '??????????'
                }
                else{
                    valuesHolder[0] = valuesHolder[1]/valuesHolder[0]
                }
                break
            
            default:
                break

        }
        if(this.state.newNum){
            valuesHolder[1] = numHolder
        }
        this.setState({
            values: valuesHolder
        })
    }

    getStateValues = (val) =>{
        
        switch(val){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return val

            case '+':
                return 10

            case '-':
                return 11

            case '*':
                return 12

            case '/':
                return 13

            case 'c':
                return 14

            case '.':
                return 15

            case '=':
                return 16

            default:
                return
        }
    }

    buttonRelease =(val, ycord, topOp, botOp) =>{
        this.buttonChange(val, ycord, topOp, botOp)
        this.storeValues(val)
        this.loadValues()
    }

    buttonChange =(val, ycord, topOp, botOp)=>{
        let values = [...this.state.buttonStates]
        let valuesButton = {...values[this.getStateValues(val)]}
        valuesButton.ycord = ycord
        valuesButton.topOpacity = topOp
        valuesButton.bottomOpacity = botOp
        values[this.getStateValues(val)] = valuesButton
        this.setState({
            buttonStates:values
        })
    }

    button = (num) =>{
        return(
            
            <div style = {{position: "absolute"}}
            onMouseDown = {()=>this.buttonChange(num, this.state.buttonStates[this.getStateValues(num)].ycord + (4*this.state.dimMultiplier), 0, 0)}
            onMouseUp = {()=>this.buttonRelease(num, this.state.buttonStates[this.getStateValues(num)].ycord - (4*this.state.dimMultiplier), .7, .5)}
            >
                
                {(num !== 0) && (num !== '=') && (num !=='=') && (num !=='c')? 
                <div> 
                    <img src={app1_button_frame_small_top}  style={{left: this.state.buttonStates[this.getStateValues(num)].xcord, top: this.state.buttonStates[this.getStateValues(num)].ycord, width: 30*this.state.dimMultiplier, position: "absolute"}}/> 
                    <img src={app1_button_frame_small_bottom} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord, top: this.state.buttonStates[this.getStateValues(num)].ycordConstant, width: 30*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_small_line} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord + (2*this.state.dimMultiplier), top: this.state.buttonStates[this.getStateValues(num)].ycord + (24*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: this.state.buttonStates[this.getStateValues(num)].topOpacity, position: "absolute"}}/>
                    <img src={app1_button_frame_small_line} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord + (2*this.state.dimMultiplier), top: this.state.buttonStates[this.getStateValues(num)].ycord + (26*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: this.state.buttonStates[this.getStateValues(num)].bottomOpacity, position: "absolute"}}/>
                </div>
                :
                <div>
                    <img src={app1_button_frame_large_top} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord, top: this.state.buttonStates[this.getStateValues(num)].ycord, width: 62*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_large_bottom} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord, top: this.state.buttonStates[this.getStateValues(num)].ycordConstant, width: 62*this.state.dimMultiplier, position: "absolute"}}/>
                    <img src={app1_button_frame_large_line} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord + (2*this.state.dimMultiplier), top: this.state.buttonStates[this.getStateValues(num)].ycord + (24*this.state.dimMultiplier), width: 58*this.state.dimMultiplier, opacity: this.state.buttonStates[this.getStateValues(num)].topOpacity, position: "absolute"}}/>
                    <img src={app1_button_frame_large_line} style={{left: this.state.buttonStates[this.getStateValues(num)].xcord + (2*this.state.dimMultiplier), top: this.state.buttonStates[this.getStateValues(num)].ycord + (26*this.state.dimMultiplier), width: 58*this.state.dimMultiplier, opacity: this.state.buttonStates[this.getStateValues(num)].bottomOpacity, position: "absolute"}}/>
                </div>}
                
                <img src={this.getButtonImage(num)} 
                
                style={{left: this.state.buttonStates[this.getStateValues(num)].xcord + (2*this.state.dimMultiplier), top: this.state.buttonStates[this.getStateValues(num)].ycord + (2*this.state.dimMultiplier), width: 26*this.state.dimMultiplier, opacity: .7, position: "absolute"}}/> 
            </div>
        )
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
            
            default:
                return null
        }
        
    }


    getNumberScreenImage=(num, xcord, arr)=>{
        
        switch(num){
            case '0':
                arr = [...arr, 
                    <img src = {app1_0} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_0} key={xcord+1}style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
            
            case '1':
                arr = [...arr, 
                    <img src = {app1_1} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_1} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
            
            case '2':
                
                    arr = [...arr, 
                    <img src = {app1_2} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_2} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
                
            case '3':
                arr = [...arr, 
                    <img src = {app1_3} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_3} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break

            case '4':
                
                    arr = [...arr,  
                    <img src = {app1_4} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_4} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
            
            case '5':
                arr = [...arr, 
                    <img src = {app1_5} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_5} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break

            case '6':
                arr = [...arr, 
                    <img src = {app1_6} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_6} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
            
            case '7':
                arr = [...arr, 
                    <img src = {app1_7} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_7} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break

            case '8':
                arr = [...arr, 
                    <img src = {app1_8} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_8} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break
                
            case '9':
                arr = [...arr, 
                    <img src = {app1_9} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                    <img src = {app1_9} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break

            case '.':
                arr = [...arr, 
                <img src = {app1_decimal} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute'}}/>,
                <img src = {app1_decimal} key={xcord+1} style={{top: 26*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
            
                break

            
            case '?':
                break

            default:
                arr = [...arr,  
                    <img src = {app1_8} key={xcord} style={{top: 24*this.state.dimMultiplier, left: xcord, width: 10*this.state.dimMultiplier, position: 'absolute', opacity: .5}}/>]
                
                break

        }
        return arr
    }
    

    loadValues=()=>{
        let displayValuesHolder = []
        
        
        let stringNum = this.state.values[0]+''
        let stringNumIterator =stringNum.length - 1
        
        for(let xcord = (188*this.state.dimMultiplier); xcord>=(44*this.state.dimMultiplier); xcord=xcord-(16*this.state.dimMultiplier)){
            if(stringNumIterator<0){
                displayValuesHolder = this.getNumberScreenImage('default', xcord, displayValuesHolder)
            }
            else{
                displayValuesHolder = this.getNumberScreenImage(stringNum[stringNumIterator], xcord, displayValuesHolder)
                stringNumIterator = stringNumIterator-1
            }
        }
        
        this.setState({
            displayValues: displayValuesHolder
        })
        
    }
    render(){
        return(
            <div style={{position: "absolute"}}>
                
                {this.button(0)}
                {this.button(1)}
                {this.button(2)}
                {this.button(3)}
                {this.button(4)}
                {this.button(5)}
                {this.button(6)}
                {this.button(7)}
                {this.button(8)}
                {this.button(9)}

                {this.button('+')}
                {this.button('-')}
                {this.button('*')}
                {this.button('/')}
                {this.button('=')}

                {this.button('.')}
                {this.button('c')}
                {this.state.displayValues}
                {this.state.displaySymbol}
                <img src={frame} style={{top: 20*this.state.dimMultiplier, left: 18*this.state.dimMultiplier, width: 188*this.state.dimMultiplier, position: 'absolute'}}/>
            </div>

        );
    }

}