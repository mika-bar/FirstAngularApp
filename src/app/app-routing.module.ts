import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';

// const appRoutes: Routes = [
//     {path: '', component: AppComponent,children:[
//         // {path: 'sidebar', component: SidebarComponent},
//         {path: ':index', component: SidebarItemComponent}
//         // {path: 'search', component: searchComp},
//         // {path: 'favorite', component: favoriteComp}
//     ]
// }
// ];

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
        // {path: 'sidebar', component: SidebarComponent},
    // {path: '', redirectTo: '/content', pathMatch: 'full' },
    {path: 'content',canActivate: [AuthGuard], component: HeaderComponent, children:[
        {path: ':index', component: SidebarItemComponent}
    ]
    
}
    
        // {path: 'search', component: searchComp}, canActivate: [AuthGuard]
        // {path: 'favorite', component: favoriteComp}
    

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}