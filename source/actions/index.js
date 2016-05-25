import {init} from './app'

export * from './app'

export function initializeApplication() {
  return dispatch => {
    dispatch(init())
  }
}
