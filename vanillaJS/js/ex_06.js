let list = ['AlpineJS', 'VueJS', 'SvelteJS']
let filteredList = []

let inputElement = document.querySelector('input')
let listElement = document.querySelector('ul')

function filterList(event) {
  let searchQuery = event.target.value
  filteredList = list.filter(item => {
    return item.toLowerCase().includes(searchQuery.toLowerCase())
  })
  updateUI()
}

function updateUI() {
  listElement.innerHTML = filteredList.map(item => `<li>${item}</li>`).join('')
}

inputElement.addEventListener('input', filterList)