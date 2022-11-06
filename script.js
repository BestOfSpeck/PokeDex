async function loadPokedex() {
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    let response = await fetch(url);
    let responseAsJson = await response.json();


    renderPokemonInfo(responseAsJson);
    console.log(responseAsJson);
}

function renderPokemonInfo(responseAsJson) {
    document.getElementById('pokedex_info_name').innerHTML = responseAsJson['name'];
    document.getElementById('pokemon_img').src = responseAsJson['sprites']['other']['home']['front_default'];
    document.getElementById('pokedex_info_type').innerHTML = responseAsJson['types'][0]['type']['name'];
    document.getElementById('pokedex_info_id').innerHTML = `#${responseAsJson['id']}`;

}