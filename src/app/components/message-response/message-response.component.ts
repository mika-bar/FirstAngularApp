
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
	selector: 'app-message-response',
	templateUrl: './message-response.component.html',
	styleUrls: ['./message-response.component.scss']
})
export class MessageResponseComponent implements OnInit {
	public title: string = '';
	public subTitle: string = '';

	constructor(public dialogRef: MatDialogRef<MessageResponseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.title = data.MessageObject.TITLE;
		this.subTitle = data.MessageObject.SUBTITLE;
	}

	ngOnInit() {
	}
}
