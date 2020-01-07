import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button-wrapper',
	templateUrl: './button-wrapper.component.html',
	styleUrls: ['./button-wrapper.component.scss']
})
export class ButtonWrapperComponent implements OnInit {
	@Input() isWaiting: boolean;
	@Input() text: string;
	@Input() fullWidth: boolean;
	@Input() buttonValid: boolean;
	@Output() buttonClick = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	clickedEvent() {
		this.buttonClick.emit();
	}
}
