import './styles.css'
import { INCREMENT, DECREMENT } from './redux/types'
// import { createStore } from './createStore'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'

let state = 1

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const themeBtn = document.getElementById('theme')
const asyncBtn = document.getElementById('async')

const store = createStore(rootReducer, 0)

window.store = store

addBtn.addEventListener('click', (e) => {
  store.dispatch({ type: INCREMENT })
})

subBtn.addEventListener('click', () => {
  store.dispatch({ type: DECREMENT })
})

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {}, 2000)
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle("dark");
})

