let currendPokemon;
let maxPokeValue = 24;

async function loadLandingpage() {
    for (let f = 1; f < maxPokeValue; f++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${f}`;
        let response = await fetch(url);
        let currendPokemon = await response.json();

        renderOverwiev(currendPokemon, f);
    }
}



function generateColors(responseAsJson) {
    let type = responseAsJson['types'][0]['type']['name'];
    console.log(type);
    if (type == 'fire') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #F08030";
    }
    if (type == 'bug') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #A8B820";
    }
    if (type == 'water') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #6790F0";
    }
    if (type == 'grass') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #78C84F";
    }
    if (type == 'flying') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #A890F0";
    }
    if (type == 'poison') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #9F40A0";
    }
    if (type == 'normal') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #A8A878";
    }
    if (type == 'dark') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #705848";
    }
    if (type == 'electric') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #F9CF30";
    }
    if (type == 'psy') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #F85888";
    }
    if (type == 'ground') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #E0C068";
    }
    if (type == 'ice') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #98D8D8";
    }
    if (type == 'steel') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #B8B8D0";
    }
    if (type == 'fairy') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #EE99AC";
    }
    if (type == 'fighting') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #C03128";
    }
    if (type == 'rock') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #B8A039";
    }
    if (type == 'dragon') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #7038F8";
    }
    if (type == 'ghost') {
        document.getElementById('detail_card_img_radius').style.border = "4px solid #705898";
    }


}

function renderOverwiev(currendPokemon, i) {
    document.getElementById('landing_page').innerHTML += `
        <div id="landingPage_card" class="landingPage-card" onclick="openDetail(${i})">
            <div class="name">
                <div class="landingPage-card-name">${currendPokemon['name']}</div>
                <div class="landingPage-card-order">#${currendPokemon['order']}</div>
            </div>
           <div class="landingPage-card-img"><img src="${currendPokemon['sprites']['other']['home']['front_default']}"></div>
          <div class="landingPage-card-type">${currendPokemon['types'][0]['type']['name']}</div>
        </div> 
        `;

}

async function openDetail(i) {
    document.getElementById('detail_container').style.display = '';
    document.getElementById('detail_card').innerHTML = '';

    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    generateDetailCard(responseAsJson);
    console.log(responseAsJson);
    updateProgressBar(responseAsJson);
    generateColors(responseAsJson)
}

function openAbout() {
    document.getElementById('about_container').classList.remove('d-none');
    document.getElementById('bast-stats_container').classList.add('d-none');
    document.getElementById('moves-container').classList.add('d-none');
}

function openBastStats() {
    document.getElementById('about_container').classList.add('d-none');
    document.getElementById('bast-stats_container').classList.remove('d-none');
    document.getElementById('moves-container').classList.add('d-none');
}

function openEvolution() {
    document.getElementById('about_container').classList.add('d-none');
    document.getElementById('bast-stats_container').classList.add('d-none');
    document.getElementById('moves-container').classList.add('d-none');
}

function openMoves() {
    document.getElementById('about_container').classList.add('d-none');
    document.getElementById('bast-stats_container').classList.add('d-none');
    document.getElementById('moves-container').classList.remove('d-none');
}

function returnToOverview() {
    document.getElementById('detail_container').style.display = 'none';
}

function clickDioalog(e) {
    e.stopPropagation();
}

function generateDetailCard(responseAsJson) {
    document.getElementById('detail_card').innerHTML = `
    <div class="detail-card-container">
         <div class="detail-card-name-container">
                <div class="detail-card-name">${responseAsJson['name']}</div>
         </div>
        <div id="detail_card_types" class="detail-card-type-container"></div>


         <div class="detail-card-img-container">
                <div id="detail_card_img_radius" class="detail-card-img-radius"><img class="detail-card-img" src="${responseAsJson['sprites']['other']['home']['front_default']}"></div>
         </div>
    </div>
    <div class="detail-card-nav">
        <nav class="nav nav-pills nav-justified">
            <a id="nav" class="nav-item nav-link" onclick="openAbout()" href="#">About</a>
            <a id="nav1" class="nav-item nav-link" onclick="openBastStats()" href="#">Base Stats</a>   
            <a id="nav3" class="nav-item nav-link" onclick="openMoves()" href="#">Moves</a>
        </nav>
    </div>

    <div id="about_container" class="about-container">
        <table>
            <tr class="border-bottom">
                <td class="about-td1">Species</td>
                <td class="about-td" id="Species">${responseAsJson['species']['name']}</td>
            </tr>
            <tr class="border-bottom">
                <td class="about-td1">height</td>
                <td class="about-td" id="height">${responseAsJson['height']}</td>
            </tr>
            <tr class="border-bottom">
                <td class="about-td1">Weight</td>
                <td class="about-td" id="weight">${responseAsJson['weight']}</td>
            </tr>
            <tr>
                <td class="about-td1">Abilities</td>
                <td class="about-td" id="abilities"></td>
            </tr>
        </table>
  </div>

    <div id="bast-stats_container" class="bast-stats-container d-none">
        <div class="stats-container">
            <span>HP</span>
            <span>Attack</span>
            <span>Defense</span>
            <span>Sp.Atk</span>
            <span>Sp.Def</span>
            <span>Speed</span>
        </div>
        <div class="stats-number-container">
            <span>${responseAsJson['stats'][0]['base_stat']}</span>
            <span>${responseAsJson['stats'][1]['base_stat']}</span>
            <span>${responseAsJson['stats'][2]['base_stat']}</span>
            <span>${responseAsJson['stats'][3]['base_stat']}</span>
            <span>${responseAsJson['stats'][4]['base_stat']}</span>
            <span>${responseAsJson['stats'][5]['base_stat']}</span>
        </div>
        <div class="porgress-container">
            <div class="progress">
                    <div class="progress-bar" id="progress-bar" style="width: 0%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div class="progress">
                    <div class="progress-bar" id="progress-bar1" style="width: 0%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div class="progress">
                    <div class="progress-bar" id="progress-bar2" style="width: 0%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div class="progress">
                    <div class="progress-bar" id="progress-bar3" style="width: 0%;"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div class="progress">
                    <div class="progress-bar" id="progress-bar4" style="width: 0%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div class="progress">
                    <div class="progress-bar" id="progress-bar5" style="width: 0%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div> 

    <div class="moves-container d-none" id="moves-container"></div>
    
    
    `;

    for (let t = 0; t < responseAsJson['moves'].length; t++) {
        const element = responseAsJson['moves'][t];

        document.getElementById('moves-container').innerHTML += `
    <div class="moves">${element['move']['name']}</div>
    `;
    }

    for (let i = 0; i < responseAsJson['abilities'].length; i++) {
        const element = responseAsJson['abilities'][i];
        document.getElementById('abilities').innerHTML += `<div class="abilities-container">${element['ability']['name']}</div>`;
    }

    for (let o = 0; o < responseAsJson['types'].length; o++) {
        const element = responseAsJson['types'][o];

        document.getElementById('detail_card_types').innerHTML += `
         <div class ="detail-card-type">${element['type']['name']}</div>
        `;
    }
}

function updateProgressBar(responseAsJson) {
    let percent = responseAsJson['stats'][0]['base_stat'];
    let percent1 = responseAsJson['stats'][1]['base_stat'];
    let percent2 = responseAsJson['stats'][2]['base_stat'];
    let percent3 = responseAsJson['stats'][3]['base_stat'];
    let percent4 = responseAsJson['stats'][4]['base_stat'];
    let percent5 = responseAsJson['stats'][5]['base_stat'];

    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-bar1').style.width = `${percent1}%`;
    document.getElementById('progress-bar2').style.width = `${percent2}%`;
    document.getElementById('progress-bar3').style.width = `${percent3}%`;
    document.getElementById('progress-bar4').style.width = `${percent4}%`;
    document.getElementById('progress-bar5').style.width = `${percent5}%`;
}