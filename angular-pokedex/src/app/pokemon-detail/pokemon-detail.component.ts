import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: any = [];


  constructor(private pokemonService:PokemonService, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let name = this._actRoute.snapshot.paramMap.get('name');
    let UrlName = "https://pokeapi.co/api/v2/pokemon/" + name;
    this.pokemonService.setUrl(UrlName);
    this.pokemonService.getPokemonDetail()
    .subscribe(pokemons => this.pokemonDetail = pokemons);
  }


}
