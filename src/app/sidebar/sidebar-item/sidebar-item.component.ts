import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { SidebarItem } from '../../sidebar-item.model';
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

  ngOnInit() {
  }

  closeSidebar(){
    //emit the clicking event, for closing the sidebar: change the isOpen
    //inside the header component
    this.closeSiderbarEvent.emit(true);
  }

}
