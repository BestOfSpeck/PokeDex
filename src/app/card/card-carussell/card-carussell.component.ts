import { Component, Input } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-card-carussell',
  templateUrl: './card-carussell.component.html',
  styleUrls: ['./card-carussell.component.scss'],
})
export class CardCarussellComponent {
  @Input() item: any;
  @Input() i?: number;

  constructor(private pokeDataService: PokeDataService) {}

  addToFavorite(pokemon: any) {
    this.pokeDataService.addToFavorites(pokemon);
  }
}
