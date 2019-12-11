import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedDataService } from '../../services/shared-data.service';
import { User } from '../../models/user';
import { CustomValidatorsService } from '../../services/custom-validators.service';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { MessagesService } from 'src/app/services/messages.service';
import { UserService } from 'src/app/services/user.service';
import { ServerError, UserUpdatedSuccess } from 'src/app/shared/messages';

@Component({
	selector: 'app-user-profile-page',
	templateUrl: './user-profile-page.component.html',
	styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

	public user: User;
	public waitingResponse = false;

	constructor(private router: Router, public fb: FormBuilder, private messageService: MessagesService,
		private sharedData: SharedDataService, private customValidator: CustomValidatorsService,
		private userService: UserService) {
		this.user = new User();
	}

	ngOnInit() {
		if (!this.sharedData.selectedUserToEdit) {
			this.router.navigateByUrl('/app/users');
		} else {
			this.user = Object.assign(new User(), this.sharedData.selectedUserToEdit);
			this.sharedData.selectedUserToEdit = undefined;
		}
	}

	public updateUser(user: User) {
		this.userService.updateUser(user).subscribe(resp => {
			this.messageService.showConfirmOrErrorMessage(UserUpdatedSuccess);
		}, err => {
			this.messageService.showConfirmOrErrorMessage(ServerError);
		});
	}

	public backClicked() {
		this.router.navigateByUrl('/app/users');
	}

}
