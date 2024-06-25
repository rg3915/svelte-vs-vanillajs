let appElement = document.querySelector('#app')

let mouse = { x: 0, y: 0 }

function handleMouseMove(event) {
  mouse.x = event.clientX
  mouse.y = event.clientY

  updateUI()
}

function updateUI() {
  appElement.innerHTML = `
    The mouse position is ${mouse.x} x ${mouse.y}
  `
}

appElement.addEventListener('mousemove', handleMouseMove)