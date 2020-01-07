import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, count } from 'rxjs/operators';
import { Subject, throwError, Subscription, BehaviorSubject } from 'rxjs';
import { Pokemon, PokemonName } from './pokemon-model.model'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FavouritesService } from '../services/favourites.service';
import { Favourite } from '../favourites/favourite-model.model';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  public namesArray: PokemonName[] = [];
  favouritesArray: PokemonName[] = [];
  private cookievalue: string;
  error = new Subject<string>();
  private pokemonsSub: Subscription;
  result = new BehaviorSubject<Pokemon>(null);
  offset = 0;

  cookiesCount: number = 0;
  cookiedCountReduce: number = 0;
  postsArray: PokemonName[] = [];
  nextUrl = '';
  pokemonClickedOnce = false;

  @Input() index: number;

  constructor(private http: HttpClient, private cookieService: CookieService,
    private router: Router, private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.fetchFavourites();
  }
  ngOnChanges() {
    this.fetchFavourites();
  }

  //   isFavourite(key, pokemonName: PokemonName): boolean {

  //   //   const isFavourite = () => {
  //   //     this.favouritesService.getFavourite(pokemonName).subscribe(
  //   //       res=>{
  //   //         return true;
  //   //       },err=>{
  //   //         return false;
  //   //       }
  //   //     )
  //   //   }
  //   //   return isFavourite;
  //   // }

  //   // return this.cookieService.check(key) || isFavourite;

  // }

  fetchFavourites() {
    const favourites = this.favouritesService.getFavourites().subscribe((res: Favourite[]) => {
      res.forEach(result => {
        this.favouritesArray.push({ name: result.pokemonName });
      })
      this.fetchPokemons();
    }, err => {
      console.log('could not get all favourites list! ')

    })
    console.log(this.favouritesArray);
  }

  fetchPokemons(getOffset = 0) {

    this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${getOffset}&limit=32`).pipe(
      // map((responseData: Pokemon) => {
      //   const postsArray: string[] = [];
      //   responseData.results.forEach(result => {
      //     postsArray.push(result.name);
      //   })
      //   return postsArray;
      // }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    ).subscribe(
      // responseData => {
      //   this.namesArray = responseData;
      //   console.log(responseData);
      (responseData: Pokemon) => {

        this.nextUrl = responseData.next;
        console.log(responseData);
        responseData.results.forEach(result => {
          let isFavouritetemp = this.favouritesArray.some(favourite => favourite.name === result.name );

          const pokemon = new PokemonName(
            result.name, '',
            isFavouritetemp
          );
          // this.postsArray.push(pokemon);
          this.namesArray.push(pokemon);
          console.log(pokemon.name, pokemon.isFavourite);
        })
        // this.namesArray = this.postsArray;
        console.log('fetchPokemons happened! ');
      },
      error => {
        //delete this if not needed
        this.error.next(error.message);
      }
    );
  }



  onScrollDown() {

    this.offset = this.offset + 20;
    if (!!this.nextUrl) {
      // debugger
      this.fetchPokemons(this.offset);
    }
  }

  ngOnDestroy() {
    // this.errorSub.unsubscribe();
  }

  saveToFavourites(item: PokemonName, i: number) {

    const cookies: {} = this.cookieService.getAll();
    let numOfCookies = Object.keys(cookies).length;

    this.favouritesService.getFavourite(item).subscribe(res => {

      this.favouritesService.deleteFavourite(item).subscribe(res => {
        console.log('deleted from favourites! ');
        item.isFavourite = false;
        const index = this.favouritesArray.indexOf(item);
        this.favouritesArray.splice(index, 1);
      }, err => {
        console.log('couldnt delete from favourites ! ');
      })
    }, error => {
      console.log('item needs to be added to favourites! ');
      this.favouritesService.save(item).subscribe(res => {
        this.favouritesArray.push(item);
        console.log(res);
        item.isFavourite = true;
      }, err => {
        console.log(err);
      })
    })

    // if (!this.isFavourite(item.name)) {

    //   item.isFavourite = true;

    //   console.log("favourites before adding: " + numOfCookies);

    //   this.favouritesArray.push(item);
    //   this.cookieService.set(item.name, item.name);
    //   this.cookievalue = this.cookieService.get(item.name);
    //   console.log("added pokemon: " + this.cookievalue);
    //   console.log("favourites after adding: " + numOfCookies);

    // }
    // else {


    //   console.log("favourites before delete: " + numOfCookies);

    //   console.log(this.cookievalue);
    //   this.cookieService.delete(item.name);
    //   item.isFavourite = false; 
    //   console.log("favourites after delete: " + numOfCookies);

    // }
  }
}







