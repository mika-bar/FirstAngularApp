import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../components/app-layout/app-layout.component';
import { CanActivateNotLoggedUser } from '../shared/CanActivateNotLoggedUser';
import { CanActivateLoggedUser } from '../shared/CanActivateLoggedUser';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarItemComponent } from '../sidebar/sidebar-item/sidebar-item.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth-guard.service';
import { HeaderComponent } from '../header/header.component';
import { FavouritesComponent } from '../favourites/favourites.component';



// Demo for full routes of project
// const routes: Routes = [
// 	{ path: '', redirectTo: 'app/users', pathMatch: 'full', canActivate: [CanActivateNotLoggedUser] },
// 	{ path: 'login', component: LoginPageComponent, canActivate: [CanActivateNotLoggedUser] },
// 	{
// 		path: 'app', component: AppLayoutComponent, canActivate: [CanActivateLoggedUser],
// 		children: [
// 			{
// 				path: 'dashboard', component: DashboardPageComponent
// 			},
// 			{
// 				path: 'events',
// 				children: [
// 					{ path: '', component: EventPageComponent },
// 					{ path: 'manage', component: EventProfilePageComponent },
// 					{ path: 'bars', component: BarsPageComponent },
// 				]
// 			},
// 			{
// 				path: 'pastevents',
// 				children: [
// 					{ path: '', component: PastEventsPageComponent },
// 					{ path: 'report', component: EventReportPageComponent },
// 				]
// 			},
// 			{
// 				path: 'users',
// 				children: [
// 					{ path: '', component: UsersPageComponent },
// 					{ path: 'profile', component: UserProfilePageComponent },
// 					{ path: 'report', component: UserReportPageComponent }
// 				]
// 			},
// 			{
// 				path: 'managers',
// 				children: [
// 					{ path: '', component: ManagersPageComponent },
// 					{ path: 'profile', component: ManagerProfilePageComponent }
// 				]
// 			},
// 			{
// 				path: 'notifications',
// 				children: [
// 					{ path: '', component: PushNotificationPageComponent },
// 				]
// 			},
// 		]
// 	},
// 	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
// ];

// const appRoutes: Routes = [
//     {path: '', component: AppComponent,children:[
//         // {path: 'sidebar', component: SidebarComponent},
//         {path: ':index', component: SidebarItemComponent}
//         // {path: 'search', component: searchComp},
//         // {path: 'favorite', component: favoriteComp}
//     ]
// }
// ];

const routes: Routes = [
	{ path: '', component: HomeComponent },
    // {path: 'sidebar', component: SidebarComponent},
    // {path: '', redirectTo: '/content', pathMatch: 'full' },
    {
        path: 'content', canActivate: [AuthGuard], component: HeaderComponent, children: [
            // {path: ':index', component: SidebarItemComponent}
			{ path: 'SEARCH', component: SidebarItemComponent },
            // { path: 'FAVOURITES', redirectTo:'/FavouritesPage' },
            { path: 'FAVOURITES', component:FavouritesComponent },
            { path: 'X', component: SidebarItemComponent }
        ]

    }
    // {path:'FavouritesPage', component:FavouritesComponent}

    // {path: 'search', component: searchComp}, canActivate: [AuthGuard]
    // {path: 'favorite', component: favoriteComp}
];



@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
