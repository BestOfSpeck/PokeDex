import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';

@Component({
  selector: 'app-my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.scss'],
})
export class MyPokedexComponent implements OnInit {
  constructor(private pokeDataService: PokeDataService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.pokeDataService.getFavorites();
    this.loadToData();
    console.log(this.data);
  }

  loadToData() {
    this.data = this.pokeDataService.getFavorites();
  }

  removeFromPokeDex(pokemon: any) {
    this.pokeDataService.removeFromLocalStorage(pokemon);
    this.loadToData();
  }
}
