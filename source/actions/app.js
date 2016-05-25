export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION'
const initializeApplication = () => ({
  type: INITIALIZE_APPLICATION
})

export function init() {
  return dispatch => {
    dispatch(initializeApplication())
  }
}
