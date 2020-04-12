
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Pokemon} from './pokemon';



@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemonURL = "https://pokeapi.co/api/v2/pokemon/";  // URL to web api

  setUrl(value:string){
    this.pokemonURL = value;
  }
  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonURL)
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
