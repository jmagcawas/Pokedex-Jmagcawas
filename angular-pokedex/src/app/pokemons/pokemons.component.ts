import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

   pokemons: any = [];

  constructor(private pokemonService: PokemonService) {

   }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemon()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  onNext():void{
    this.pokemonService.getNext(this.pokemons.next);
    this.ngOnInit();
  }
  onPrevious():void{
    this.pokemonService.getPrevious(this.pokemons.previous);
    this.ngOnInit();
  }

  


}
