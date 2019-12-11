import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class SharedDataService {

	public selectedUserToEdit: User;

	constructor() { }
}
