import React, { Component } from 'react';
import Cell from './Cell'


const values = []

for (let row = 0; row < 10; row++) {
  const rowArray = []
  for (let col = 0; col < 10; col++) {
    rowArray.push("#F00")
  }
  values.push(rowArray)
}

export default class Matrix extends Component {

  state = {
    values: this.props.values || values
  }

  genRow = (vals) => {
    return vals.map((val, index) => <Cell key={index} className="cell" value={val} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map((rowVals, i) => <div key={i} className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
Matrix.defaultProps = {
  values: values
}
