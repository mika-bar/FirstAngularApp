import * as moment from 'moment';

export class UserDetails {
	forms_filled: boolean;
	full_name: string;
	id_number: string;
	email: string;
	phone: string;
	city: string;
	gender: string;
	date_of_birth: string;
	profile_picture_url: string;
	age: string;
}

export class User {
	user_details: UserDetails;
	_id: string;
	last_login: Date;
	createdAt: Date;
	updatedAt: Date;


	public calculateBirthDate() {
		const birthMoment = moment(this.user_details.date_of_birth);
		const today = moment();
		this.user_details.age = today.diff(birthMoment, 'years').toFixed(1);
	}
}

