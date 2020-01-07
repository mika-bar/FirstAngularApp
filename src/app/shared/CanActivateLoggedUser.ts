import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


/**
 *  Check if there is a token of the user, and if exist then it completes the route.
 * If there is not a token , then it will send to login
 *
 */


@Injectable()
export class CanActivateLoggedUser implements CanActivate {

	constructor(private router: Router, private authService: AuthService) { }

	canActivate() {
		const token = this.authService.getToken();
		if (token) {
			return true;
		} else {
			this.router.navigateByUrl('/login');
			return false;
		}
	}
}
