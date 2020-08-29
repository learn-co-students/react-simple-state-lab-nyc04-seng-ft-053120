import React from 'react'

class Cell extends React.Component {

    state = {
        color: this.props.value
    }

    handleClick = () => {
        this.setState({
        çcolor: '#333'
            
        })
    }
    render(){
        
       return (
           <div onClick={this.handleClick}className ="cell" style={{backgroundColor: this.state.color}}></div>
       )
}
}

export default Cell