
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ignoreElements } from 'rxjs/operators';

@Component({
	selector: 'app-message-confirm',
	templateUrl: './message-confirm.component.html',
	styleUrls: ['./message-confirm.component.scss']
})


export class MessageConfirmComponent implements OnInit {
	public title: string = '';
	public subTitle: string = '';
	public buttonText: string = '';

	constructor(public dialogRef: MatDialogRef<MessageConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.title = data.MessageObject.TITLE;
		this.subTitle = data.MessageObject.SUBTITLE;
		this.buttonText = data.MessageObject.BUTTON;
		if (this.buttonText === '') {
			this.buttonText = 'Remove';
		}
	}

	ngOnInit() {
	}
}


