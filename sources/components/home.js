import React from 'react'
import {connect} from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>😎 template</h1>
        <p>Redux initialized: {`${this.props.app.initialized}`}</p>
      </div>
    )
  }
}

export default connect(state => state)(Home)
