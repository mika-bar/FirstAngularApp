import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { AppComponent } from './app.component';

// const appRoutes: Routes = [
//     {path: '', redirectTo: '/sidebar', pathMatch:'full'},
//     {path: 'sidebar', component: SidebarComponent,children:[
//         {path:':index', component: SidebarItemComponent}
//     ]
// }
// ];

const appRoutes: Routes = [
    {path: '', component: AppComponent,children:[
        {path: 'sidebar', component: SidebarComponent},
        {path: ':index', component: SidebarItemComponent}
    ]
}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}