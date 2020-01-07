import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthService {
    loggedIn = false;
	userCheckedRemember = false;
	
	constructor(private router: Router, private cookieService:CookieService) { }


	isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                if (this.userCheckedRemember || this.loggedIn) {
                    resolve(true);
                }
                else {
                    setTimeout(() => {
                        resolve(this.loggedIn);
                    }, 1);
                }
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    loadContent() {
        this.userCheckedRemember = true;
	}
	
	

	logout() {
		// sessionStorage.removeItem('barim-token');
        // this.router.navigateByUrl('/login');
        this.cookieService.delete('user name');
        this.cookieService.delete('user password');
        if(!this.cookieService.get('user name') && !this.cookieService.get('user password')){
            console.log('deleted user credentials from cookies!! ')
        }
        this.loggedIn=false;
        // this.router.navigate(['/']);
        this.router.navigateByUrl('');

	}

	getToken() {
        // return sessionStorage.getItem('barim-token');
        return this.cookieService.get('user token');
	}

	setToken(token: string) {
		// sessionStorage.setItem('barim-token', token);
	}
}
