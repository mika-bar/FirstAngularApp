import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { SidebarItem } from '../../models/sidebar-item.model';
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {

  @Input() index: number;
  @Input() sidebarItem: SidebarItem;
  @Output() closeSiderbarEvent= new EventEmitter<boolean>();
  @Output() displayFavouritesEvent= new EventEmitter<boolean>();
  @Output() displaySearchEvent= new EventEmitter<boolean>();
  @Output() displayGithubSearchEvent= new EventEmitter<boolean>();
  display=false;
  search=false;
  githubSearch=false;

  ngOnInit() {
  }

  closeSidebar(){
    //emit the clicking event, for closing the sidebar: change the isOpen
    //inside the header component
    this.closeSiderbarEvent.emit(true);
  }

  displayFavourites(){
    this.display=!this.display;
    this.displayFavouritesEvent.emit(this.display);
    
  }
  displaySearch(){
    this.search= !this.search;
    this.displaySearchEvent.emit(this.search);

  }
  displayGitHub(){
    this.githubSearch=!this.githubSearch;
    this.displayGithubSearchEvent.emit(this.githubSearch);
  }

}
