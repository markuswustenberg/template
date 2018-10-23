import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import About from './about'
import Home from './home'
import NotFound from './not-found'

export default class Container extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>

          <div>
            <p>Routing:</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/does-not-exist">Does not exist</Link></li>
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}
