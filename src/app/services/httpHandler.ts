import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class HttpHandler {

	private baseUrl = environment.baseUrl;
	public headers = new HttpHeaders();

	constructor(private http: HttpClient, private router: Router) {
		this.headers = new HttpHeaders().set('Content-Type', 'application/json');
	}

	public get(url: string, params: HttpParams = undefined): Observable<any> {
		return this.http.get(this.baseUrl + url, { params: params, headers: this.headers });
	}
	public delete(url: string, params: HttpParams = undefined): Observable<any> {
		return this.http.delete(this.baseUrl + url, { params: params, headers: this.headers });
	}

	public put(url: string, body: any): Observable<any> {
		return this.http.put(this.baseUrl + url, body, { headers: this.headers });
	}

	public post(url: string, body: any): Observable<any> {
		return this.http.post(this.baseUrl + url, body, { headers: this.headers });
	}
}
