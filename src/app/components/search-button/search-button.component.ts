import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search-button',
	templateUrl: './search-button.component.html',
	styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

	@Input() disabled: boolean;
	@Output() searchClicked = new EventEmitter();
	@Output() clearSearch = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	searchOnClick() {
		if (!this.disabled) {
			this.searchClicked.emit();
		}
	}

	clearClicked() {
		this.clearSearch.emit();
	}

}
