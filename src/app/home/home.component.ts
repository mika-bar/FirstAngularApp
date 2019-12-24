import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { userResponse, User } from './user-model.model'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private cookievalue: string;
  username = '';
  password = '';
  checkbox = 'Remember me';
  rememberMe = false;

  submitted = false;

  //@ViewChild('f', { static: false }) signupForm: NgForm;
  @ViewChild('f') signupForm: NgForm;
  constructor(private authService: AuthService, private cookieService: CookieService,
    private router:Router, private loginService: LoginService) { }

  ngOnInit() {

    if(this.cookieService.check('user name')){
      this.authService.loadContent();
      this.router.navigate(['content']);

    }
  }

  // ngOnChanges() {
  //   if (this.cookieService.check('user name')) {
  //     this.authService.loadContent();
  //   }
  // }


  checkboxClicked() {
    this.rememberMe = true;

  }

  onSubmit() {
    this.submitted = true;
    this.username = this.signupForm.value.username;
    this.password = this.signupForm.value.password;
    if (this.rememberMe) {
      this.cookieService.set('user name', this.username);
      this.cookievalue = this.cookieService.get('user name');
      console.log('user name: '+ this.cookievalue);

      this.cookieService.set('user password', this.password);
      this.cookievalue = this.cookieService.get('user password');
      console.log('user password: '+ this.cookievalue);
      // console.log(this.rememberMe);

      this.authService.loadContent();
    }

    this.loginService.login(this.username, this.password).subscribe((responseData: userResponse) => {
      this.cookieService.set('user token',responseData.token);
      this.cookievalue = this.cookieService.get('user token');
      console.log('user token: '+ this.cookievalue)
    },error => {
      console.log(error.message)

    });

    this.signupForm.reset();

    this.authService.login();

  }



}

