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
  @Output() onFavourites= new EventEmitter<any>();
  @Output() onSearch= new EventEmitter<any>();
  @Output() onGithubSearch= new EventEmitter<any>();

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
    this.onFavourites.emit();
  }

  showSearch(searchEvantData:boolean){
    this.isSearchOpen=searchEvantData;
    this.onSearch.emit();

  }
  showGithubSearch(githubSearchEventData:boolean){
    this.isGithubSearchOpen=githubSearchEventData;
    this.onGithubSearch.emit();

  }
  

    
  

}
