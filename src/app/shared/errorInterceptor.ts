import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Intercepts each error recived from the server.
 * It checks if the error is 401 or 403.
 * That mean that the token is wrong then it makes logout.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(catchError(err => {
			if (err.status === 401 || err.status === 403) {
				this.authService.logout();
			}
			return throwError(err);
		}));
	}
}
