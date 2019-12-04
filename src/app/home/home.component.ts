import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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

  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor(private authService: AuthService, private cookieService: CookieService,
    private router:Router) { }

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
      console.log(this.cookievalue);

      this.cookieService.set('user password', this.password);
      this.cookievalue = this.cookieService.get('user password');
      console.log(this.cookievalue);
      // console.log(this.rememberMe);

      this.authService.loadContent();
    }

    this.signupForm.reset();

    this.authService.login();

    // console.log(this.rememberMe);
  }



}

