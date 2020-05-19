import "./styles.css";

let state = 1;

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const themeBtn = document.getElementById("theme");

const asyncBtn = document.getElementById("async");

function render() {
  return (counter.textContent = state.toString());
}

addBtn.addEventListener("click", (e) => {
  state++;
  render();
});

subBtn.addEventListener("click", () => {
  state--;
  render();
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state++;
    render();
  }, 2000);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
