import {Provider} from 'react-redux'
import React from 'react' // eslint-disable-line no-unused-vars, because the JSX is translated to React.something
import ReactDOM from 'react-dom'

import Container from './components/container'
import {initializeApplication} from './actions'
import store from './store'

store.dispatch(initializeApplication())

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('container')
)
