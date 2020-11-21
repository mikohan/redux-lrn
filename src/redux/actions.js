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
    setTimeout(() => {
      dispatch({ type: types.ASYNC_INCREMENT })
    }, 2000)
  }
}

export function changeTheme() {
  return {
    type: types.CHANGE_THEME
  }
}
