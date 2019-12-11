import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { HttpHandler } from './httpHandler';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService extends HttpHandler  {

	getInfo(): Observable<any> {
		const url = 'dashboard';
		return this.get(url);
	}
}
