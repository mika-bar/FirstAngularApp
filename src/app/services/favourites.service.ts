import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';
import { PokemonName } from '../pokemons-list/pokemon-model.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService extends HttpHandler {

  public save(pokemonName: PokemonName) {
    const url = 'favourites';
    return this.post(url, { ...pokemonName });
  }

  public getFavourites() {
    const url = 'favourites';
    return this.get(url);
  }

  public getFavourite(pokemonName:any) {
    const url = 'favourites/search';
    return this.get(url, pokemonName);

  }

  public deleteFavourite(pokemonName: any) {
    const url = 'favourites';
    return this.delete(url, pokemonName);
  }


}
