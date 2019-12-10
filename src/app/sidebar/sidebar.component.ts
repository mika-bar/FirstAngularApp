import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../sidebar-item.model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() isHambOpen: boolean;
  @Input() isDisplayOpen: boolean;
  @Output() onCloseSidebar= new EventEmitter<any>();
  @Output() onFavourites= new EventEmitter<any>();

  public sidebarItems: SidebarItem []=
  [
    new SidebarItem('X'),
    new SidebarItem('SEARCH'),
    new SidebarItem('FAVOURITES')
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

    
  

}
