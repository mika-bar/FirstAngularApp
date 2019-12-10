import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, count } from 'rxjs/operators';
import { Subject, throwError, Subscription, BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemon-model.model'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  public namesArray: string[] = [];

  favouritesArray: string[] =[];
  private cookievalue: string;

  error = new Subject<string>();

  private pokemonsSub: Subscription;

  result = new BehaviorSubject<Pokemon>(null);

  offset = 0;

  cookiesCount: number = 0;
  cookiedCountReduce: number = 0;

  postsArray: string[] = [];

  nextUrl = '';

  @Input() index: number;

  constructor(private http: HttpClient, private cookieService: CookieService,
    private router: Router) { }

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
          this.postsArray.push(result.name);
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

  onScrollDown() {
    // debugger
    this.offset = this.offset + 20;
    if (!!this.nextUrl) {
      // debugger
      this.fetchPokemons(this.offset);
    }
  }

  ngOnDestroy() {
    // this.errorSub.unsubscribe();
  }

  saveToFavourites(item: string) {
    
    if(this.cookieService.check('user name')){
      this.cookiedCountReduce=-1;
    }
    if(this.cookieService.check('user password')){
      this.cookiedCountReduce=-1;
    }
    const cookies:{} = this.cookieService.getAll();
    console.log(Object.keys(cookies).length);
    this.cookiesCount=  Object.keys(cookies).length + this.cookiedCountReduce + 1;
    
    
    this.favouritesArray.push(item);
    this.cookieService.set(`pokemon${this.cookiesCount}`, item);
    this.cookievalue = this.cookieService.get(`pokemon${this.cookiesCount}`);
    console.log(this.cookievalue);
  }
}







