let appElement = document.querySelector('#app')

async function fetchPokemon(pokemonName) {
  let url = 'https://pokeapi.co/api/v2/pokemon/'
  let response = await fetch(`${url}${pokemonName}`)
  let { name, sprites } = await response.json()

  return {
    name,
    image: sprites['front_default']
  }
}

async function renderUI() {
  let { name, image } = await fetchPokemon('pikachu')

  appElement.innerHTML = `
    <h1>${name}</h1>
    <img src=${image} alt=${name} />
  `
}

renderUI()