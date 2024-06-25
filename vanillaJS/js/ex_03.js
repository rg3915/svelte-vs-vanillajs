let appElement = document.querySelector('#app')

let todos = [
  { id: 1, text: 'Learn Javascript', completed: true },
  { id: 2, text: 'Learn Svelte', completed: false },
  { id: 3, text: 'Learn Sveltekit', completed: false },
  { id: 4, text: 'Learn CSS', completed: false },
]

let todosHtml = ''

for (let todo of todos) {
  let checked = todo.completed ? 'checked' : null

  todosHtml += `
    <li data-id=${todo.id}>
      <input ${checked} type="checkbox" />
      <span>${todo.text}</span>
    </li>
  `
}

appElement.innerHTML = `<ul>${todosHtml}</ul>`