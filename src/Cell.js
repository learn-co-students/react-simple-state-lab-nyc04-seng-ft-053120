import React, {Component}from "react";
class Cell extends Component{
    
state={
  color: this.props.value
}
handleClick=()=>{
    this.setState({
        color:"#333"
    })
}
    render(){
        console.log("cell",this.props)
        console.log("cell",this.props.value)
        return(
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
            
            </div>
        )
    }
}
export default Cell