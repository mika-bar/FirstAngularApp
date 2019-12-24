import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Intercepts each request to the server.
 * It add the jwt token to the header and send the request
 */

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

	constructor(private router: Router, private authService: AuthService) { }

	intercept(req: HttpRequest<any>,
		next: HttpHandler): Observable<HttpEvent<any>> {

		if (req.url === 'http://localhost:3000/users/login') {
			return next.handle(req);
		}
		const jwtToken = this.authService.getToken();

		const cloned = req.clone({
			headers: req.headers.append('Authorization',
				'Bearer ' + jwtToken)
		});
		return next.handle(cloned);
	}
}
