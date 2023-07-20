import { Component } from '@angular/core';
import { PokeDataService } from './poke-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NASA';
  pokemonList: any[] = [];

  constructor(private pokeDataService: PokeDataService) {}

  getPokemonList() {
    this.pokeDataService.getPokemonList(0, 20).then((response) => {
      console.log(response['data']['results']);
      this.pokemonList = response['data']['results'];
    });
  }
}
