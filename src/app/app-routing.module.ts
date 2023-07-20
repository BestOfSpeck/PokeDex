import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: CardComponent },
  { path: 'pokedex', component: MyPokedexComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
