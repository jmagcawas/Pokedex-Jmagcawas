import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import{PokemonDetail} from '../pokemonDetail';
import { PokemonService } from '../pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

   pokemons: any = [];

   selectedPokemon:Pokemon;

   disable:boolean = false;

  constructor(private pokemonService: PokemonService,
    private pokemonRouter: Router) {

   }

  ngOnInit(): void {
    this.getPokemons();
    
  }
  
  onSelect(pokemon:Pokemon):void{
      this.selectedPokemon = pokemon;
      this.pokemonService.setUrl(this.selectedPokemon.url);
      // this.pokemonService.setSelectedPokemon(this.selectedPokemon);
      this.pokemonRouter.navigate(['/pokemondetail', this.selectedPokemon.name]);
      console.log(this.pokemonService);
  }

  getPokemons(): void {
    this.pokemonService.getPokemon()
      .subscribe(pokemons => this.pokemons = pokemons);
  }


  onNext():void{
    this.pokemonService.getNext(this.pokemons.next);
    this.ngOnInit();
    this.disable = true;

  }
  onPrevious():void{
    this.pokemonService.getPrevious(this.pokemons.previous);
    this.ngOnInit();
  }

  


}
