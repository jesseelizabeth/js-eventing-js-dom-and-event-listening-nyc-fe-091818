// 1. Get the element 
const main = document.querySelector('main')

// 2. Add an event listener
function onClick() {
  console.log('I was clicked')
}

main.addEventListener('click', onClick)