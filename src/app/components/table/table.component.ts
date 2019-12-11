import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableCol } from '../../models/tableCol';
import { Utils } from 'src/app/shared/utils';


/**
 * Generic Table
 */


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


	@Input() cols: TableCol[];
	@Input() data: any[];
	@Input() page: number;
	@Input() itemsPerPage: number;
	@Input() totalPages: number;
	@Input() tableHeightVH: number = 68;

	//#region Output Actions

	@Output() nextPage = new EventEmitter();
	@Output() prevPage = new EventEmitter();
	@Output() newAction = new EventEmitter();
	@Output() editAction = new EventEmitter();
	@Output() removeAction = new EventEmitter();
	@Output() workerAction = new EventEmitter();
	@Output() barAction = new EventEmitter();
	@Output() userChangeBarAction = new EventEmitter();
	@Output() eventDoneAction = new EventEmitter();
	@Output() reportAction = new EventEmitter();

	//#endregion

	//#region Input Action Exist

	@Input() withActions: boolean = false;
	@Input() withEdit: boolean = false;
	@Input() withRemove: boolean = false;
	@Input() withWorkers: boolean = false;
	@Input() withBars: boolean = false;
	@Input() withUserChangeBar: boolean = false;
	@Input() withEventDone: boolean = false;
	@Input() withReport: boolean = false;

	@Input() withPagination: boolean = true;

	//#endregion

	public utils = new Utils();



	constructor() { }

	ngOnInit() {
	}

	//#region Actions Clicked
	public nextPageOnClick() {
		this.nextPage.emit();
	}
	public prevPageOnClick() {
		this.prevPage.emit();
	}
	public editActionOnClick(rowData) {
		this.editAction.emit(rowData);
	}
	public removeActionOnClick(rowData) {
		this.removeAction.emit(rowData);
	}

	public workerActionOnClick(rowData) {
		this.workerAction.emit(rowData);
	}
	public barsActionOnClick(rowData) {
		this.barAction.emit(rowData);
	}

	public userChangeBarClicked(rowData) {
		this.userChangeBarAction.emit(rowData);
	}

	public eventDoneClicked(rowData) {
		this.eventDoneAction.emit(rowData);
	}
	public reportClicked(rowData) {
		this.reportAction.emit(rowData);
	}

	//#endregion

}
