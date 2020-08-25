import React from "react";


export default class Cell extends React.Component{
    constructor(props){
        super()
       console.log(props)
        this.state = {
            color: props.value
        }
    }

    changeStyle = (e) => {

        // style={{backgroundColor: this.state.color}}
       this.setState({
           color: "#333"
       })
    }
    

    render() {
        return (
            <div className="cell" onClick ={this.changeStyle} style= {{backgroundColor: this.state.color}}> 
                
            </div>
        )  
    }
}