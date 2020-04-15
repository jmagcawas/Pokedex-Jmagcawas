import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  
  {path: '' , component: PokemonsComponent },
  {path : 'pokemondetail/:name', component: PokemonDetailComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PokemonsComponent, PokemonDetailComponent]