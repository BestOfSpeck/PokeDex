import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokeDataService {
 private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor() {}

  getPokemonList(offset: number, limit: number) {
    const url = `${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`;
    return axios.get(url);
  }

  getPokemonDetails(pokemonName: string) {
    const url = `${this.baseUrl}pokemon/${pokemonName}`;
    return axios.get(url);
  }

  addToFavorites(pokemon: any) {
    const favorites = this.getFavorites();
    favorites.push(pokemon);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (!favorites) {
      return [];
    }
    console.log(favorites);
    return JSON.parse(favorites);
  }

  removeFromFavorites(pokemon: any) {
    const favorites = this.getFavorites();
    const newFavorites = favorites.filter((p: any) => p.name !== pokemon.name);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }
}
