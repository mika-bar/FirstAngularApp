import { Component, Input } from '@angular/core';
import { $ } from 'protractor';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
    
    isOpen=true;

    isMenuOpen = false;

    onChangePhoto(){

    }
    onDeletePhoto(){

    }

    onLogIn(){
        this.isMenuOpen = !this.isMenuOpen;

    }


    toggleSidebar(){
        this.isOpen = !this.isOpen;
        // $(".flex-container").classList.toggle('active');
  }


}