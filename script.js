async function loadPokedex() {
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    let response = await fetch(url);
    let responseAsJson = await response.json();


    renderPokemonInfo(responseAsJson);
    console.log(responseAsJson);
}

function renderPokemonInfo(responseAsJson) {
    document.getElementById('pokedex_info_name').innerHTML = responseAsJson['name'];
    document.getElementById('pokedex_info_types').innerHTML = responseAsJson['types'][0]['type']['name'];
    document.getElementById('pokedex_info_id').innerHTML = `#${responseAsJson['id']}`;
    document.getElementById('pokedex_info_img').url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
}