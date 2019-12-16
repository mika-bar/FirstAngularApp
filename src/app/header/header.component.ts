import { Component, Input } from '@angular/core';
import { $ } from 'protractor';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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