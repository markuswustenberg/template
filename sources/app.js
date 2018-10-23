import React from 'react' // eslint-disable-line no-unused-vars, because the JSX is translated to React.something
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {initializeApplication} from './actions'
import Container from './components/container'
import reducers from './reducers'

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

store.dispatch(initializeApplication())

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('container')
)
