import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TableCol } from '../../models/tableCol';
import { SharedDataService } from '../../services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MessageConfirmComponent } from 'src/app/components/message-confirm/message-confirm.component';
import { MessageShow } from 'src/app/models/messageShow';
import {
	UserRemoveMessage,
	UserRemovedSuccess,
	ServerError,
	UserMadeManagerSuccess,
	UserMakeManagerMessage
} from 'src/app/shared/messages';
import { MessageResponseComponent } from 'src/app/components/message-response/message-response.component';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
	selector: 'app-users-page',
	templateUrl: './users-page.component.html',
	styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

	public form: FormGroup;
	public pagination: Pagination;
	public totalPages: number = 1;
	public pageUsers: User[] = [];
	public loadingUsers: boolean = false;
	public cols: TableCol[] = [];


	constructor(private userService: UserService, private sharedData: SharedDataService,
		private router: Router, private r: ActivatedRoute, private dialog: MatDialog,
		private fb: FormBuilder, private messageService: MessagesService) {
		this.createColsTableItem();
		this.form = fb.group({
			name_search: [''],
		});
	}

	ngOnInit() {
		this.pagination = new Pagination(1, 15);
		this.getUsers();
	}

	createColsTableItem() {
		this.cols.push(new TableCol('Img', 'user_details.profile_picture_url', 'image'));
		this.cols.push(new TableCol('Name', 'user_details.full_name'));
		this.cols.push(new TableCol('ID', 'user_details.id_number'));
		this.cols.push(new TableCol('Gender', 'user_details.gender'));
		this.cols.push(new TableCol('Phone', 'user_details.phone'));
		this.cols.push(new TableCol('Age', 'user_details.age'));
	}

	private getUsers() {
		this.loadingUsers = true;
		this.userService.getAllUsers(this.pagination, this.form.controls.name_search.value).subscribe(resp => {
			this.loadingUsers = false;
			this.pageUsers = resp.items.map(item => {
				const user = Object.assign(new User(), item);
				user.calculateBirthDate();
				return user;
			});
			this.totalPages = resp.totalPages;
		}, err => {
			this.loadingUsers = false;
			this.messageService.showConfirmOrErrorMessage(ServerError);
		});
	}

	nextPage() {
		if (this.totalPages > this.pagination.page) {
			this.pagination.page++;
			this.getUsers();
		}
	}

	prevPage() {
		if (this.pagination.page > 1) {
			this.pagination.page--;
			this.getUsers();
		}
	}

	editClicked(user: User) {
		this.sharedData.selectedUserToEdit = user;
		this.router.navigateByUrl('/app/users/profile');
	}

	removeClicked(user: User) {
		const dialogRef = this.dialog.open(MessageConfirmComponent, {
			width: '700px',
			data: {
				MessageObject: UserRemoveMessage,
			}
		});
		dialogRef.afterClosed().subscribe(confirm => {
			if (confirm) {
				this.removeUser(user);
			}
		});
	}


	public searchClicked() {
		this.getUsers();
	}

	public clearSearch() {
		this.form.controls.name_search.setValue('');
		this.getUsers();
	}

	public userReport(user: User) {
		this.sharedData.selectedUserToEdit = user;
		this.router.navigateByUrl('/app/users/report');
	}

	private removeUser(user: User) {
		this.userService.removeUser(user._id).subscribe(resp => {
			this.messageService.showConfirmOrErrorMessage(UserRemovedSuccess);
			this.getUsers();
		}, (err) => {
			this.messageService.showConfirmOrErrorMessage(ServerError);
		});
	}

}
