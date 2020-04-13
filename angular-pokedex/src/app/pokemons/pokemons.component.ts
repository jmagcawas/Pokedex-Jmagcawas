import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import{PokemonDetail} from '../pokemonDetail';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

   pokemons: any = [];

   pokemonDetail:any = [];

   selectedPokemon:Pokemon;

   disable:boolean = false;

  constructor(private pokemonService: PokemonService) {

   }

  ngOnInit(): void {
    this.getPokemons();
    this.getPokemonDetail();
    
  }

  
  onSelect(pokemon:Pokemon):void{
      this.selectedPokemon = pokemon;
      this.pokemonService.setUrl(this.selectedPokemon.url);
      this.ngOnInit();
  }

  getPokemons(): void {
    this.pokemonService.getPokemon()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
  getPokemonDetail():void{
    this.pokemonService.getPokemonDetail()
    .subscribe(pokemonDetail => this.pokemonDetail = pokemonDetail);
    
  }



  onNext():void{
    this.pokemonService.getNext(this.pokemons.next);
    this.ngOnInit();
    this.disable = true;
    // if(this.pokemons.next = " "){
    //   alert('no next pokemon')
    // }
  }
  onPrevious():void{
    this.pokemonService.getPrevious(this.pokemons.previous);
    this.ngOnInit();
    
    // if(this.pokemons.previous = " "){
    //   alert('no previous pokemon')
    // }
  }

  


}
