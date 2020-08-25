import React, { Component } from 'react';

export default class Cell extends React.Component {
    //constructor will take in a prop & set its value to that of color
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }


    changeColor = () =>{
        this.setState(state => ({
            color: '#333'
        }))
    }

    render() {
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor} ></div>
        )
    }
}