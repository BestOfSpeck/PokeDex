    async function loadPokedex() {
        // let query = document.getElementById('search_input').value;
        let url = `https://pokeapi.co/api/v2/pokemon/cacnea`;
        let response = await fetch(url);
        let responseAsJson = await response.json();

        renderPokemonInfo(responseAsJson);
        renderBaseStats(responseAsJson);
        updateProgressBar(responseAsJson);
        dynamicBackground(responseAsJson);
        renderMoves(responseAsJson);
        console.log(responseAsJson);
    }

    function switchInformationes1() {
        document.getElementById('about_container').classList.remove('d-none');
        document.getElementById('baseStats_container').classList.add('d-none');
        document.getElementById('evolution_container').classList.add('d-none');
        document.getElementById('moves_container').classList.add('d-none');
    }

    function switchInformationes2() {
        document.getElementById('about_container').classList.add('d-none');
        document.getElementById('baseStats_container').classList.remove('d-none');
        document.getElementById('evolution_container').classList.add('d-none');
        document.getElementById('moves_container').classList.add('d-none');
    }

    function switchInformationes3() {
        document.getElementById('about_container').classList.add('d-none');
        document.getElementById('baseStats_container').classList.add('d-none');
        document.getElementById('evolution_container').classList.remove('d-none');
        document.getElementById('moves_container').classList.add('d-none');
    }

    function switchInformationes4() {
        document.getElementById('about_container').classList.add('d-none');
        document.getElementById('baseStats_container').classList.add('d-none');
        document.getElementById('evolution_container').classList.add('d-none');
        document.getElementById('moves_container').classList.remove('d-none');
    }

    function renderPokemonInfo(responseAsJson) {
        document.getElementById('pokedex_info_name').innerHTML = responseAsJson['name'];
        document.getElementById('pokemon_img').src = responseAsJson['sprites']['other']['home']['front_default'];
        document.getElementById('pokedex_info_type').innerHTML = responseAsJson['types'][0]['type']['name'];
        document.getElementById('pokedex_info_id').innerHTML = `#${responseAsJson['id']}`;
        document.getElementById('pokedex_info_height').innerHTML = responseAsJson['height'];
        document.getElementById('pokedex_info_weight').innerHTML = responseAsJson['weight'];

        for (let i = 0; i < responseAsJson['abilities'].length; i++) {
            const abilitie = responseAsJson['abilities'][i];

            document.getElementById('pokedex_info_abilities').innerHTML = `
            ${abilitie['ability']['name']}
            `;
        }

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

    function renderMoves(responseAsJson) {
        for (let i = 0; i < responseAsJson['moves'].length; i++) {
            const move = responseAsJson['moves'][i];
            document.getElementById('moves_container').innerHTML = move['move']['name'];

        }
    }

    function updateProgressBar(responseAsJson) {
        let hpInPercent = responseAsJson['stats'][0]['base_stat'];
        let AtkInPercent = responseAsJson['stats'][1]['base_stat'];
        let defInPercent = responseAsJson['stats'][2]['base_stat'];
        let spAtkInPercent = responseAsJson['stats'][3]['base_stat'];
        let spDefInPercent = responseAsJson['stats'][4]['base_stat'];
        let speedInPercent = responseAsJson['stats'][5]['base_stat'];


        document.getElementById('progress_bar_0').style.width = `${hpInPercent}%`;
        document.getElementById('progress_bar_1').style.width = `${AtkInPercent}%`;
        document.getElementById('progress_bar_2').style.width = `${defInPercent}%`;
        document.getElementById('progress_bar_3').style.width = `${spAtkInPercent}%`;
        document.getElementById('progress_bar_4').style.width = `${spDefInPercent}%`;
        document.getElementById('progress_bar_5').style.width = `${speedInPercent}%`;
    }

    function dynamicBackground(responseAsJson) {
        let type = responseAsJson['types'][0]['type']['name'];

        if (type == 'fire') {
            document.getElementById('pokedex').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_0').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_1').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_2').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_3').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_4').style.backgroundColor = "#F08030";
            document.getElementById('progress_bar_5').style.backgroundColor = "#F08030";
        }
        if (type == 'water') {
            document.getElementById('pokedex').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_0').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_1').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_2').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_3').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_4').style.backgroundColor = "#78C8FD";
            document.getElementById('progress_bar_5').style.backgroundColor = "#78C8FD";
        }
        if (type == 'bug') {
            document.getElementById('pokedex').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_0').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_1').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_2').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_3').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_4').style.backgroundColor = "#A8B720";
            document.getElementById('progress_bar_5').style.backgroundColor = "#A8B720";
        }
        if (type == 'electric') {
            document.getElementById('pokedex').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_0').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_1').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_2').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_3').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_4').style.backgroundColor = "#FECE4A";
            document.getElementById('progress_bar_5').style.backgroundColor = "#FECE4A";
        }
        if (type == 'poison') {
            document.getElementById('pokedex').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_0').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_1').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_2').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_3').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_4').style.backgroundColor = "#7B548B";
            document.getElementById('progress_bar_5').style.backgroundColor = "#7B548B";
        }
        if (type == 'fairy') {
            document.getElementById('pokedex').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_0').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_1').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_2').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_3').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_4').style.backgroundColor = "#EE99AC";
            document.getElementById('progress_bar_5').style.backgroundColor = "#EE99AC";
        }
        if (type == 'ice') {
            document.getElementById('pokedex').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_0').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_1').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_2').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_3').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_4').style.backgroundColor = "#98D8D8";
            document.getElementById('progress_bar_5').style.backgroundColor = "#98D8D8";
        }
        if (type == 'grass') {
            document.getElementById('pokedex').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_0').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_1').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_2').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_3').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_4').style.backgroundColor = "#78C84F";
            document.getElementById('progress_bar_5').style.backgroundColor = "#78C84F";
        }
        if (type == 'ground') {
            document.getElementById('pokedex').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_0').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_1').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_2').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_3').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_4').style.backgroundColor = "#E0C068";
            document.getElementById('progress_bar_5').style.backgroundColor = "#E0C068";
        }
        if (type == 'steel') {
            document.getElementById('pokedex').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_0').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_1').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_2').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_3').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_4').style.backgroundColor = "#B8B8D0";
            document.getElementById('progress_bar_5').style.backgroundColor = "#B8B8D0";
        }
        if (type == 'dark') {
            document.getElementById('pokedex').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_0').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_1').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_2').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_3').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_4').style.backgroundColor = "#705848";
            document.getElementById('progress_bar_5').style.backgroundColor = "#705848";
        }
        if (type == 'normal') {
            document.getElementById('pokedex').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_0').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_1').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_2').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_3').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_4').style.backgroundColor = "#A8A878";
            document.getElementById('progress_bar_5').style.backgroundColor = "#A8A878";
        }
        if (type == 'fighting') {
            document.getElementById('pokedex').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_0').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_1').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_2').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_3').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_4').style.backgroundColor = "#C03128";
            document.getElementById('progress_bar_5').style.backgroundColor = "#C03128";
        }
        if (type == 'rock') {
            document.getElementById('pokedex').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_0').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_1').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_2').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_3').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_4').style.backgroundColor = "#B8A039";
            document.getElementById('progress_bar_5').style.backgroundColor = "#B8A039";
        }
        if (type == 'psychic') {
            document.getElementById('pokedex').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_0').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_1').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_2').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_3').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_4').style.backgroundColor = "#F85888";
            document.getElementById('progress_bar_5').style.backgroundColor = "#F85888";
        }
        if (type == 'ghost') {
            document.getElementById('pokedex').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_0').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_1').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_2').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_3').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_4').style.backgroundColor = "#705898";
            document.getElementById('progress_bar_5').style.backgroundColor = "#705898";
        }
        if (type == 'dragon') {
            document.getElementById('pokedex').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_0').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_1').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_2').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_3').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_4').style.backgroundColor = "#7038F8";
            document.getElementById('progress_bar_5').style.backgroundColor = "#7038F8";
        }
    }