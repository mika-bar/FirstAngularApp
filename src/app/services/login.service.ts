import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';
import { Pagination } from '../models/pagination';

@Injectable()

export class LoginService extends HttpHandler {

	public login(email: string, password: string) {
		const url = 'login';
		return this.post(url, {email , password});
	}
}
