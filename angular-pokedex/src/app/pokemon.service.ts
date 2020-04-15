
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Pokemon} from './pokemon';

import{PokemonDetail} from './pokemonDetail';




@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemonURL = "https://pokeapi.co/api/v2/pokemon/";  // URL to web api

  private pokemonDetailURL = "https://pokeapi.co/api/v2/pokemon/1";  // URL to web api

  private currentPokemon:any = null;

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonURL)
  }

  getPokemonDetail(): Observable<PokemonDetail[]> {
    return this.http.get<PokemonDetail[]>(this.pokemonDetailURL)
  }



  setUrl(value:string){
    this.pokemonDetailURL = value;
  }

  getNext(next:string):void{
    this.pokemonURL = next;
  }


  getPrevious(previous:string):void{
    this.pokemonURL = previous;
  }

  setSelectedPokemon(pokemonVar: any) {
    this.currentPokemon = pokemonVar;
  }

  getSelectedPokemon(): Observable<Pokemon[]>{
    return this.currentPokemon;
  }





//  private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
  
//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
  
//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);
  
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

 
  

}
