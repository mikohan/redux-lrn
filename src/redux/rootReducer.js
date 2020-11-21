import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME } from './types'

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 1
  }
  return state
}

const isDark = {
  value: false
}
function themeReducer(state = isDark, action) {
  if (action.type === CHANGE_THEME) {
    state.value = !state.value
    return { ...state, value: state.value }
  }
  return state
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})
