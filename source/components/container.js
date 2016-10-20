import {connect} from 'react-redux'
import React from 'react'

class Container extends React.Component {
  render() {
    return (
      <div>
        <h1>😎 template</h1>
        <p>Initialized: {`${this.props.app.initialized}`}</p>
      </div>
    )
  }
}

export default connect(state => state)(Container)
