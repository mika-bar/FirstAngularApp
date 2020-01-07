import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ServerError, LoginError } from 'src/app/shared/messages';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	public waitingResponse = false;
	public form: FormGroup;

	constructor(private fb: FormBuilder, private router: Router, private messageService: MessagesService,
		private loginService: LoginService, private authService: AuthService) { }

	ngOnInit() {
		this.form = this.fb.group({
			email: [null, Validators.compose([Validators.required, CustomValidators.email])],
			password: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
		});
	}

	loginClicked() {
		const { email, password } = this.form.value;
		this.loginService.login(email, password).subscribe(resp => {
			this.authService.setToken(resp.token);
			this.router.navigateByUrl('app/dashboard');
		}, err => {
			if (err.error.message) {
				this.messageService.showConfirmOrErrorMessage(LoginError)
			} else {
				this.messageService.showConfirmOrErrorMessage(ServerError)
			}
		});
	}
}
