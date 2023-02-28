import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { PokemonService } from "./service/pokemon.service";

@Injectable({ providedIn: 'root' })
export class PokemonExists implements AsyncValidator {
  constructor(private service: PokemonService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.service.getPokemon().pipe(
      map((pokemons: string[]) => {
        if (pokemons.includes(control.value)) {
          return { pokemonAlreadyExists: control.value};
        }

        return null;
      })
    )
  }
}