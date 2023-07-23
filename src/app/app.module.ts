import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';
import { CardCarussellComponent } from './card/card-carussell/card-carussell.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MyPokedexComponent,
    CardCarussellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
