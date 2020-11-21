import './styles.css'
// import { createStore } from './createStore'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import {
  asyncIncrement,
  decrement,
  increment,
  changeTheme
} from './redux/actions'
import logger from 'redux-logger'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

function myLogger(state) {
  return function (next) {
    return function (action) {
      console.log('PreState:', state.getState())
      console.log('Action:', action)
      const newState = next(action)
      console.log('PostState:', state.getState())
      return newState
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
window.store = store
addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

addBtn.addEventListener('click', () => {})
asyncBtn.addEventListener('click', async () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
})
store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
  const isDark = store.dispatch(changeTheme())
  isDark
    ? document.body.classList.toggle('dark')
    : document.body.classList.toggle('dark')
})
