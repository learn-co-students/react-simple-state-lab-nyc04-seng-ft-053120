import React, { Component } from 'react';
import Cell from "./Cell"

export default class Matrix extends Component {
  
  genRow = (vals) => {
    //console.log("row",vals)
    return vals.map(val => <Cell key={val.id} value={val} /> ) // replace me and render a cell component instead!
  }
  genMatrix = () => {
    //console.log("ma", this.props.values)
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

Matrix.defaultProps = {values: [
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
]}

// //Es 6
// Matrix.defaultProps ={
//   values:(()=> {const defaultRow =['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
//   return (new Array(10).fill(defaultRow))
// })()
// }
// // another solution
// function defGrid() {
//   let grid = []
//   for (let i = 0; i < 10; i++) {
//       let row = [];
//       for (let j = 0; j < 10; j++) {
//       row.push('#F00');
//       }
//       grid.push(row);
//   }
//   return grid;
// }

// Matrix.defaultProps = {
//   values: defGrid(),
// }