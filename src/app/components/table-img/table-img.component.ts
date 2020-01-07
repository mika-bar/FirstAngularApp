import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-table-img',
	templateUrl: './table-img.component.html',
	styleUrls: ['./table-img.component.scss']
})
export class TableImgComponent implements OnInit, OnChanges {
	@Input() defaultImageUrl: string;
	@Input() imageUrl: string;
	@Input() width: number;
	@Input() height: number;
	@Input() selectedImageUrl: string;
	@Input() class: string;

	public imageUrlHasValue = false;
	public showDefault = true;

	constructor() { }

	ngOnInit() {
		this.selectedImageUrl = this.defaultImageUrl;
	}

	ngOnChanges() {
		if (this.imageUrl && this.imageUrl !== '' && this.imageUrl !== undefined) {
			this.imageUrlHasValue = true;
		}
	}

	public imageFound() {
		this.showDefault = false;
	}

	public imageNotFound() {
		this.showDefault = true;
	}
}
