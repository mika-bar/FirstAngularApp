import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;
  
  
  username: '';
  password: '';
  checkbox='Remember me';
 
  
  submitted = false;

 

  onSubmit() {
    this.submitted = true;
    this.username = this.signupForm.value.username;
    this.password = this.signupForm.value.password;
    

    this.signupForm.reset();
  }

}

