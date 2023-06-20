import React, { Component } from 'react'

export default class ReactLifeCycleUnmount extends Component {
    componentWillUnmount()
    {
        console.log("component is unmounted 😒")
    }
  render() {
    return (
      <div>ReactLifeCycleUnmount</div>
    ) 
  }
}
