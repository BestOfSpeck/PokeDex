let pokemonForFilter = [];
let currendPokemon;
let maxPokeValue = 30;

async function loadLandingpage() {
    for (let f = 1; f < maxPokeValue; f++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${f}`;
        let response = await fetch(url);
        let currendPokemon = await response.json();
        pokemonForFilter.push(currendPokemon);
        console.log(currendPokemon)

        renderOverwiev(currendPokemon);

    }
}

function generateColors(currendPokemon) {
    let type = currendPokemon['types'][0]['type']['name'];
    console.log(type);
    if (type == 'fire') {
        document.getElementById('landingPage-card').style.backgroundColor = "#F08030";
    }
    if (type == 'bug') {
        document.getElementById('landingPage-card').style.backgroundColor = "#A8B820";
    }


}

function renderOverwiev(currendPokemon) {
    document.getElementById('landing_page').innerHTML += `
        <div class="landingPage-card">
            <div class="name">
                <div class="landingPage-card-name">${currendPokemon['name']}</div>
                <div class="landingPage-card-order">#${currendPokemon['order']}</div>
            </div>
           <div class="landingPage-card-img"><img src="${currendPokemon['sprites']['other']['home']['front_default']}"></div>
          <div class="landingPage-card-type">${currendPokemon['types'][0]['type']['name']}</div>
        </div>
        `;


}