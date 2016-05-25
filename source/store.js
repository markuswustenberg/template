import createLogger from 'redux-logger'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const store = createStore(combineReducers({
  ...reducers
}), applyMiddleware(thunkMiddleware, loggerMiddleware))
export default store
