import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouritesArray: string[]=[];
  // @Output() closeSiderbarEvent= new EventEmitter<boolean>();

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.fetchFavourites();
    // this.closeSiderbarEvent.emit(true);
  }
  ngOnChanges(){
    this.fetchFavourites();
  }

  fetchFavourites(){
    const allCookies: {} = this.cookieService.getAll();
    console.log(allCookies);
    for(const key in allCookies){
      if(key==='user name' || key==='user password'){
        continue;
      }
      this.favouritesArray.push(allCookies[key]);
    }
  }
}
