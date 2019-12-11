import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedDataService } from '../../services/shared-data.service';
import { User } from '../../models/user';
import { CustomValidatorsService } from '../../services/custom-validators.service';
import { Router } from '@angular/router';

import * as moment from 'moment';
@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

	@Input() title: string;
	@Input() buttonText: string;
	@Input() user: User;
	@Input() waitingResponse: boolean = false;
	@Output() confirmAction = new EventEmitter();
	@Output() backAction = new EventEmitter();

	public form: FormGroup;
	public userWithData: boolean = true;
	public startDate: Date = new Date(2000, 0 , 1);
	constructor(public fb: FormBuilder, private customValidator: CustomValidatorsService) {
	}

	ngOnInit() {
		if (Object.keys(this.user).length > 0) {
			this.createForm();
		} else {
			this.userWithData = false;
		}
	}

	private createForm() {
		const { full_name, id_number, phone, date_of_birth, gender } = this.user.user_details;
		this.form = this.fb.group({
			full_name: [full_name, Validators.compose([Validators.required])],
			id_number: [id_number, Validators.compose([Validators.required, this.customValidator.validateIsraelId])],
			phone: [phone, Validators.compose([Validators.required, Validators.pattern(new RegExp('^[0a-zA-Z].{9}$'))])],
			date_of_birth: [date_of_birth, Validators.required],
			gender: [gender, Validators.compose([Validators.required])]
		});
	}

	public buttonOnClick() {
		this.confirmAction.emit(this.createUserToSend());
	}

	public backClicked() {
		this.backAction.emit();
	}

	private createUserToSend(){
		const user = Object.assign(new User(), this.user);
		user.user_details.full_name = this.form.controls.full_name.value;
		user.user_details.id_number = this.form.controls.id_number.value;
		user.user_details.phone = this.form.controls.phone.value;
		user.user_details.date_of_birth = this.form.controls.date_of_birth.value;
		user.user_details.gender = this.form.controls.gender.value;
		return user;
	}

}
