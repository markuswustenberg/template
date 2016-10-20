import {
  INITIALIZE_APPLICATION
} from '../actions'

const initialState = {
  initialized: false
}

export default function app(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_APPLICATION:
    return {
      ...state,
      initialized: true
    }
  default:
    return state
  }
}
