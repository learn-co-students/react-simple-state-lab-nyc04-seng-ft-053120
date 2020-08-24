import React from 'react'

class Cell extends React.Component {
    state = {
        color: this.props.value,
    }

    changeColor = () => this.setState({color: '#333'});

    render() {
        return (
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
        )
    }
}

export default Cell;