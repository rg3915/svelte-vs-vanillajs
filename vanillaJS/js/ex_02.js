let appElement = document.querySelector('#app')

let user = {
  loggedIn: false
}

function toggle() {
  user.loggedIn = !user.loggedIn
  updateUI()
}

function updateUI() {
  let html

  if (user.loggedIn) {
    html = `<button>Log out</button>`
  }

  if (!user.loggedIn) {
    html = `<button>Log in</button>`
  }

  appElement.innerHTML = html
  appElement.querySelector('button').onclick = toggle
}

updateUI()