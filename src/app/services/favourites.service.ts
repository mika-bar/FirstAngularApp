import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService extends HttpHandler {

  public save(pokemonName: any) {
    const url = 'favourites/me';
    return this.post(url, { pokemonName });
  }

  public getFavourites() {
    const url = 'favourites/me';
    return this.get(url);
  }

  public getFavourite(pokemonName:any) {
    const url = 'favourites/me';
    return this.get(url, pokemonName);

  }

  public deleteFavourite(pokemonName: any) {
    const url = 'favourites/me';
    return this.delete(url, pokemonName);
  }


}
