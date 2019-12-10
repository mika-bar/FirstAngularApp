import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    DropdownDirective,
    HomeComponent,
    PokemonsListComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatSidenavModule
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ScrollingModule  
  ],
  providers: [AuthGuard,AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
