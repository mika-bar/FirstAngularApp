import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FavouritesService } from '../services/favourites.service';
import { Favourite } from '../favourites/favourite-model.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouritesArray: string[]=[];
  // @Output() closeSiderbarEvent= new EventEmitter<boolean>();

  constructor(private cookieService: CookieService, private favouritesService: FavouritesService) { }

  ngOnInit() {
   
    this.fetchFavourites();
    // this.closeSiderbarEvent.emit(true);
  }
  ngOnChanges(){
    this.fetchFavourites();
  }

  fetchFavourites(){
    // const allCookies: {} = this.cookieService.getAll();
    // console.log(allCookies);
    // for(const key in allCookies){
    //   if(key==='user name' || key==='user password'){
    //     continue;
    //   }
    //   this.favouritesArray.push(allCookies[key]);
    // }

    const favourites = this.favouritesService.getFavourites().subscribe((res:Favourite[])=>{
      res.forEach(result =>{
        this.favouritesArray.push(result.pokemonName);
      })

    },err=>{
      console.log('could not get all favourites list! ')

    })
  }
}
