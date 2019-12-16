import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    loggedIn = false;
	userCheckedRemember = false;
	
	constructor(private router: Router) { }


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
	}

	getToken() {
		// return sessionStorage.getItem('barim-token');
	}

	setToken(token: string) {
		// sessionStorage.setItem('barim-token', token);
	}
}
