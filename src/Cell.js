import React, { Component } from 'react';

export default class Cell extends Component {

  state = {
    color: this.props.value
  }

  setColor = () => {
    const newColor = '#333'
    this.setState({ color: newColor })
    // return
  }

  render() {
    return (
      <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.setColor}>
      </div>
    )
  }

}
