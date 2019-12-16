import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../models/sidebar-item.model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() isHambOpen: boolean;
  @Input() isDisplayOpen: boolean;
  @Input() isSearchOpen: boolean;
  @Input() isGithubSearchOpen: boolean;
  @Output() onCloseSidebar= new EventEmitter<any>();
  @Output() onFavourites= new EventEmitter<boolean>();
  @Output() onSearch= new EventEmitter<boolean>();
  @Output() onGithubSearch= new EventEmitter<boolean>();

  public sidebarItems: SidebarItem []=
  [
    new SidebarItem('X'),
    new SidebarItem('SEARCH'),
    new SidebarItem('FAVOURITES'),
    new SidebarItem('GITHUB')
  ];

  ngOnInit() {

  }

  closeSide(closingEventData:boolean){
    this.isHambOpen=!closingEventData;
    this.onCloseSidebar.emit();
  }

  display(displayEventData:boolean){
    this.isDisplayOpen=displayEventData;
    // this.onFavourites.emit(this.isDisplayOpen);
    this.onFavourites.emit(true);
  }

  showSearch(searchEvantData:boolean){
    this.isSearchOpen=searchEvantData;
    // this.onSearch.emit(this.isSearchOpen);
    this.onSearch.emit(true);

  }
  showGithubSearch(githubSearchEventData:boolean){
    this.isGithubSearchOpen=githubSearchEventData;
    // this.onGithubSearch.emit(this.isGithubSearchOpen);
    this.onGithubSearch.emit(true);

  }
  

    
  

}
