import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import localeAu from '@angular/common/locales/en-AU';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatSidenavModule } from '@angular/material/sidenav';

registerLocaleData(localeAu);

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import {
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatIconModule,
	MatDividerModule,
	MatToolbarModule,
	MatListModule,
	MatSelectModule,
	MatRadioModule,
	MatDialogModule,
	MatDatepickerModule,
	MatNativeDateModule,
	DateAdapter,
	MatMenuModule,
	MatTabsModule,
} from '@angular/material';

import { CanActivateLoggedUser } from './shared/CanActivateLoggedUser';
import { CanActivateNotLoggedUser } from './shared/CanActivateNotLoggedUser';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonWrapperComponent } from './components/button-wrapper/button-wrapper.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserService } from './services/user.service';
import { HttpHandler } from './services/httpHandler';
import { TableComponent } from './components/table/table.component';
import { TableImgComponent } from './components/table-img/table-img.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { SharedDataService } from './services/shared-data.service';
import { CustomValidatorsService } from './services/custom-validators.service';
import { DateFormat } from './shared/dateFormat.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DashboardService } from './services/dashboard.service';
import { LoginService } from './services/login.service';
import { JwtInterceptor } from './shared/jwtInterceptor';
import { ErrorInterceptor } from './shared/errorInterceptor';
import { AuthService } from './services/auth.service';
import { MessageConfirmComponent } from './components/message-confirm/message-confirm.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { MessageResponseComponent } from './components/message-response/message-response.component';
import { MessagesService } from './services/messages.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CookieService } from 'ngx-cookie-service';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { FavouritesComponent } from './favourites/favourites.component';
import { GithubComponent } from './github/github.component';
import { RepoTablComponent } from './components/repo-tabl/repo-tabl.component';
import { RepoTableComponent } from './components/repo-table/repo-table.component';

// scrollbar configuration
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};


@NgModule({
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatIconModule,
		MatDividerModule,
		MatToolbarModule,
		MatListModule,
		MatSelectModule,
		MatRadioModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		PerfectScrollbarModule,
		MatMenuModule,
		MatSelectModule,
		MatTabsModule,
		FormsModule,
		HttpClientModule,
		InfiniteScrollModule,
		NgxMaterialTimepickerModule.forRoot()
	],
	declarations: [
		AppComponent,
		AppLayoutComponent,
		MenuComponent,
		LoginPageComponent,
		ButtonWrapperComponent,
		SpinnerComponent,
		DashboardPageComponent,
		UsersPageComponent,
		TableComponent,
		TableImgComponent,
		UserProfilePageComponent,
		UserFormComponent,
		MessageConfirmComponent,
		SearchButtonComponent,
		MessageResponseComponent,
		HeaderComponent,
		SidebarComponent,
		SidebarItemComponent,
		HomeComponent,
		PokemonsListComponent,
		FavouritesComponent,
		GithubComponent,
		RepoTablComponent,
		RepoTableComponent
	],
	providers: [
		CanActivateLoggedUser,
		CanActivateNotLoggedUser,
		HttpHandler,
		UserService,
		LoginService,
		DashboardService,
		SharedDataService,
		AuthService,
		CustomValidatorsService,
		MessagesService,
		AuthGuard,
		AuthService,
		CookieService,
		[
			{
				provide: LOCALE_ID, useValue: 'en-AU'
			},
			{
				provide: PERFECT_SCROLLBAR_CONFIG,
				useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
			},
			{
				provide: DateAdapter,
				useClass: DateFormat
			}
			// {
			// 	provide: HTTP_INTERCEPTORS,
			// 	useClass: JwtInterceptor,
			// 	multi: true
			// },
			// {
			// 	provide: HTTP_INTERCEPTORS,
			// 	useClass: ErrorInterceptor,
			// 	multi: true
			// }]
		]
	],
	entryComponents: [MessageConfirmComponent, MessageResponseComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private dateAdapter: DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
}
