import './styles.css'
import { createStore } from './createStore'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const state = createStore()

addBtn.addEventListener('click', () => {})

subBtn.addEventListener('click', () => {})

addBtn.addEventListener('click', () => {})
asyncBtn.addEventListener('click', async () => {
  setTimeout(() => {}, 2000)
})

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})
