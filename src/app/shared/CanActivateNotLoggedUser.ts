import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


/**
 *  This is for the login page.
 *  It checks if exist token, if exist then send it to dashboard.
 */


@Injectable()
export class CanActivateNotLoggedUser {

	constructor(public router: Router, private authService: AuthService) { }

	canActivate() {
		const token = this.authService.getToken();
		if (token) {
			this.router.navigateByUrl('/app/dashboard');
			return false;
		} else {
			return true;
		}
	}
}
