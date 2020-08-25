import React, {Component} from 'react';


    class Cell extends Component {
        constructor(props) {
          super()
          this.state = {
            color: props.value
          }
        }


handleClick = () => {

  this.setState( state => ( {

    color:' #333'

       } ) )


}


render () {
   console.log(this)

    return (
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    )
  }
}


export default Cell