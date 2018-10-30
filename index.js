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
  if (event.which === 74)
    event.preventDefault()
}

input.addEventListener('keydown', onKeyDown)

// 1. Get our input
const divs = document.querySelectorAll('div')

// 2. Add an event listener 
function onDivClick(event) {
  console.log(event)
}

for (let div of divs) {
  div.addEventListener('click', onDivClick)
}


