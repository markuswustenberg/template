import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>😎 template</h1>
        <p>Routing:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="does-not-exist">Does not exist</Link></li>
        </ul>
        <p>Redux initialized: {`${this.props.app.initialized}`}</p>
      </div>
    )
  }
}

export default connect(state => state)(Home)
