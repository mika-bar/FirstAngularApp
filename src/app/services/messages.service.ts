import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { MatDialog } from '@angular/material';
import { MessageShow } from '../models/messageShow';
import { MessageResponseComponent } from '../components/message-response/message-response.component';
import { Component } from '@angular/compiler/src/core';
import { MethodCall } from '@angular/compiler';

@Injectable()
export class MessagesService {


	constructor(private dialog: MatDialog) {
	}

	public showConfirmOrErrorMessage(message: MessageShow) {
		const dialogRef = this.dialog.open(MessageResponseComponent, {
			width: '700px',
			data: {
				MessageObject: message,
			}
		});
	}

	public showConfirmPopUp(popUp: Component, data: MessageShow, onConfirm: () => void) {
	}

}
