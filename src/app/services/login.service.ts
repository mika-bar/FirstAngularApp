import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';
import { Pagination } from '../models/pagination';

@Injectable()

export class LoginService extends HttpHandler {

	public login(userName: string, password: string) {
		const url = 'users/login';
		return this.post(url, {userName , password});
	}

	public signUp(firstName:string, lastName:string, userName: string, password: string){
		const url = 'users';
		return this.post(url, {firstName, lastName, userName, password});
	}
}
