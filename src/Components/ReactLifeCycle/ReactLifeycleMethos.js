
import React, { Component } from 'react'
import ReactLifeCycleUnmount from './ReactLifeCycleUnmount'

export default class ReactLifeycleMethos extends Component {
  constructor()
  {
    super()
    this.state={
      count:0,
      show:true

    }
  }
  componentDidMount(){
    console.log("component mounted successfully 😍 ")
  }
  componentDidUpdate(){
    console.log("component updated successfully 🙌")
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <div>Counter:{this.state.count}
      <button onClick={this.increment}>increment</button>
      <button onClick={()=>{this.setState({show:!this.state.count})}}>unmounted</button>
      {this.state.show && <ReactLifeCycleUnmount/>}

      </div>
    )
  }
}
