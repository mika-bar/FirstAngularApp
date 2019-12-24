import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';
import { AuthService } from './auth.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService extends HttpHandler {

  constructor(http: HttpClient,router: Router,private authService: AuthService){
    super(http,router);
  }

  public logout(){
    const token = this.authService.getToken();
    console.log(token);
    const url = 'users/logout';
    this.headers = new HttpHeaders().set('Authorization','Bearer '+token);
    this.authService.logout();
    return this.post(url,{});

  }
}
