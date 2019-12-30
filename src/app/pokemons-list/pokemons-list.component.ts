import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, count } from 'rxjs/operators';
import { Subject, throwError, Subscription, BehaviorSubject } from 'rxjs';
import { Pokemon, PokemonName } from './pokemon-model.model'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FavouritesService } from '../services/favourites.service';


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
    private router: Router, private favouritesService: FavouritesService ) { }

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons(getOffset = 0) {

    this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${getOffset}&limit=20`).pipe(
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
          const pokemon = {
            name: result.name,
            isFavourite: this.isFavourite(result.name)
          }
          this.postsArray.push(pokemon);
        })
        this.namesArray = this.postsArray;
        console.log(this.namesArray);
      },
      error => {
        //delete this if not needed
        this.error.next(error.message);
      }
    );
  }

  isFavourite(key) {
    return this.cookieService.check(key);
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

    this.favouritesService.getFavourite(item).subscribe(res =>{
      item.isFavourite=false;
      this.favouritesService.deleteFavourite(item).subscribe(res=>{
        console.log('deleted from favourites! ');
        const index= this.favouritesArray.indexOf(item);
        this.favouritesArray.splice(index,1);

      },err=>{
        console.log('couldnt delete from favourites ! ');

      })
    }, error => {
      console.log('item needs to be added to favourites! ');
      item.isFavourite = true;
      this.favouritesArray.push(item);
      this.favouritesService.save(item).subscribe(res=>{
        console.log(res);
      },err=>{
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







