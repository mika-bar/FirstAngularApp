import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';
import { Pagination } from '../models/pagination';
import { User } from '../models/user';

@Injectable()

export class UserService extends HttpHandler {

	public getAllUsers(pagination: Pagination, nameRegex: string, isManager: boolean = undefined) {
		const url = 'user/all';
		let params = pagination.toHttpParams();
		params = params.set('nameRegex', nameRegex);
		if (isManager) {
			params = params.set('isManager', isManager.toString());
		}
		return this.get(url, params);
	}


	public removeUser(userId: string) {
		const url = `user/${userId}`;
		return this.delete(url);
	}

	public updateUser(user: User) {
		const url = 'user';
		return this.put(url, user);
	}
}
