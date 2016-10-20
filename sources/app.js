import React from 'react' // eslint-disable-line no-unused-vars, because the JSX is translated to React.something
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import {initializeApplication} from './actions'
import About from './components/about'
import Container from './components/container'
import Home from './components/home'
import NotFound from './components/not-found'
import reducers from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(initializeApplication())

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFound} statusCode="404"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
)
