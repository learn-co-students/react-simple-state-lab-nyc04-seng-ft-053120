import React, { Component } from 'react';

export default class Cell extends Component {
  // We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF')

  // Define a constructor method in Cell, which sets an initial state key of color to the value prop which is passed from its parent component.
  constructor(props) {
    super();
    this.state = {
      color: props.value
    }
  }

  // Callback fundtion that  changes div color
  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  // Cell should render a single <div> with a className of cell
  render() {
    return(
      // In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example value here - the value should be the state's color)
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }
}