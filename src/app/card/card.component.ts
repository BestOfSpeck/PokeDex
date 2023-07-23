import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemonList: any[] = [];
  newPokemonList: any[] = [];
  isLoading = false;
  showDetails = false;

  constructor(private pokeDataService: PokeDataService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokeDataService.getPokemonList(0, 20).then((response) => {
      this.pokemonList = response['data']['results'];
      this.pokemonList.forEach((pokemon) => {
        const pokemonName = pokemon.name;
        this.getPokemonDetails(pokemonName).then((response) => {
          this.getPokemonData(pokemon, response);
        });
      });
    });
  }

  getPokemonData(pokemon: any, response: any) {
    pokemon.imageUrl =
      response['data']['sprites']['other']['home']['front_default'];
    pokemon.type = response['data']['types'][0]['type']['name'];
    pokemon.hp = response['data']['stats'][0]['base_stat'];
    pokemon.attack = response['data']['stats'][1]['base_stat'];
    pokemon.defense = response['data']['stats'][2]['base_stat'];
    pokemon.specialAttack = response['data']['stats'][3]['base_stat'];
    pokemon.specialDefense = response['data']['stats'][4]['base_stat'];
    pokemon.speed = response['data']['stats'][5]['base_stat'];
    pokemon.weight = response['data']['weight'];
    pokemon.height = response['data']['height'];
    pokemon.moves = response['data']['moves'];
  }

  getPokemonDetails(name: string) {
    return this.pokeDataService.getPokemonDetails(name);
  }

  loadMorePokemon() {
    const lenght = this.pokemonList.length;
    const limit = 20;
    this.isLoading = true;

    this.pokeDataService.getPokemonList(lenght, limit).then((response) => {
      const newPokemonList = response['data']['results'];

      newPokemonList.forEach((pokemon: any) => {
        const pokemonName = pokemon.name;
        this.getPokemonDetails(pokemonName).then((response) => {
          pokemon.imageUrl = response['data']['sprites']['front_default'];
          pokemon.type = response['data']['types'][0]['type']['name'];
          console.log(response);
        });
      });

      setTimeout(() => {
        this.pokemonList = [...this.pokemonList, ...newPokemonList];
      }, 100);
      this.isLoading = false;
    });
  }
}
