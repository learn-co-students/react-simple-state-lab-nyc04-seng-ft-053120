import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

function defaultGrid() {
  let grid = []
  for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
      row.push('#F00');
      }
      grid.push(row);
  }
  return grid;
}

Matrix.defaultProps = {
  values: defaultGrid(),
}