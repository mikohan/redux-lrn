import * as types from './types'

export function increment() {
  return {
    type: types.INCREMENT
  }
}
export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({ type: types.ASYNC_INCREMENT })
      dispatch(enableButtons())
    }, 2000)
  }
}

export function changeTheme() {
  return {
    type: types.CHANGE_THEME
  }
}

export function disableButtons() {
  return {
    type: types.DISABLE_BUTTONS
  }
}
export function enableButtons() {
  return {
    type: types.ENABLE_BUTTONS
  }
}
