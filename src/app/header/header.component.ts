import { Component, Input } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {


    isOpen = true;


    isMenuOpen = false;

    isFavouritesOpen = false;

    showPokemonsList=true;

    constructor(private logoutService: LogoutService, private cookieService: CookieService){}

    // constructor(private breakpointObserver: BreakpointObserver) { 
    //     const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
    //     debugger
    //     if (isSmallScreen) {
    //         this.isOpen = false;
    //     }
    // }
    // onChangePhoto() {

    // }
    // onDeletePhoto() {

    // }
    ngOnInit() {
        // const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
        // debugger
        // if (isSmallScreen) {
        //     this.isOpen = false;
        // }

    }

    onLogIn() {
        this.isMenuOpen = !this.isMenuOpen;

    }
    onLogout(){
        this.logoutService.logout().subscribe(reponse=>{
            this.cookieService.delete('user token');
            if (!this.cookieService.get('user token')){
                console.log('deleted user token! logging out ')
            }
            // console.log('logged out!');
        },error=>{
            console.log(error.message);
        })

        //his.http.post('http://localhost:3000/users/logout',)

    }


    toggleSidebar() {
        this.isOpen = !this.isOpen;
        // $(".flex-container").classList.toggle('active');
    }

    togglePokemonList() {
        this.showPokemonsList = !this.showPokemonsList;
    }

    showFavourites(isFavouritesOpen: boolean){
        if(isFavouritesOpen){
            this.showPokemonsList=false;
        }else{
            this.showPokemonsList=true;
        }

    }
    showSearch(isSearchOpen: boolean){
        if(isSearchOpen){
            this.showPokemonsList=true;
        }else{
            this.showPokemonsList=false;
        }

    }
    showGithubSearch(isGithubSearchOpen: boolean){
        if(isGithubSearchOpen){
            this.showPokemonsList=false;
        }else{
            this.showPokemonsList=true;
        }

    }



}