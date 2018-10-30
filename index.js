// 1. Get the element 
const main = document.querySelector('main')

// 2. Add an event listener
function onClick(event) {
  alert('I was clicked')
}

main.addEventListener('click', onClick)

// 1. Get our input 
const input = document.querySelector('input')

// 2. Add an event listener
function onKeyDown(event) {
  
}

input.addEventListener('keydown', onKeyDown)