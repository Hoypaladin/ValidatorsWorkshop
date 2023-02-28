import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon(): Observable<string[]> {
    return of([
      'charmander',
      'charmeleon',
      'charizard'
    ]).pipe(
      delay(100000)
    )
  }
}
