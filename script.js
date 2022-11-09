    async function loadPokedex() {
        // let query = document.getElementById('search_input').value;
        let url = `https://pokeapi.co/api/v2/pokemon/charmander`;
        let response = await fetch(url);
        let responseAsJson = await response.json();

        renderPokemonInfo(responseAsJson);
        renderBaseStats(responseAsJson)
        console.log(responseAsJson);
    }

    function switchInformationes(selection) {
        if (selection) {;
            document.getElementById(selection).classList.add('d-none');
        }


    }


    function renderPokemonInfo(responseAsJson) {
        document.getElementById('pokedex_info_name').innerHTML = responseAsJson['name'];
        document.getElementById('pokemon_img').src = responseAsJson['sprites']['other']['home']['front_default'];
        document.getElementById('pokedex_info_type').innerHTML = responseAsJson['types'][0]['type']['name'];
        document.getElementById('pokedex_info_id').innerHTML = `#${responseAsJson['id']}`;
        document.getElementById('pokedex_info_height').innerHTML = responseAsJson['height'];
        document.getElementById('pokedex_info_weight').innerHTML = responseAsJson['weight'];
        document.getElementById('pokedex_info_abilities').innerHTML = responseAsJson['abilities'][0]['ability']['name'];
    }


    window.addEventListener('load', function() {
        let input = document.getElementById('search_input');
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                loadPokedex();
            }
        });
    })

    function renderBaseStats(responseAsJson) {
        document.getElementById('baseStat_hp').innerHTML = responseAsJson['stats'][0]['base_stat'];
        document.getElementById('baseStat_attack').innerHTML = responseAsJson['stats'][1]['base_stat'];
        document.getElementById('baseStat_defense').innerHTML = responseAsJson['stats'][2]['base_stat'];
        document.getElementById('baseStat_spAtk').innerHTML = responseAsJson['stats'][3]['base_stat'];
        document.getElementById('baseStat_sp_def').innerHTML = responseAsJson['stats'][4]['base_stat'];
        document.getElementById('baseStat_speed').innerHTML = responseAsJson['stats'][5]['base_stat'];
    }