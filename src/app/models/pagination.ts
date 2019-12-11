import { HttpParams } from '@angular/common/http';

export class Pagination {
	page: number = 1;
	itemsPerPage: number = 5;

	constructor(page: number = 1, itemsPerPage: number = 5) {
		this.page = page;
		this.itemsPerPage = itemsPerPage;
	}

	public toString() {
		return 'page=' + this.page + '&itemPerPage=' + this.itemsPerPage;
	}

	public toHttpParams(): HttpParams {
		return new HttpParams()
			.set('skip', ((this.page - 1 ) * this.itemsPerPage).toString())
			.set('limit', this.itemsPerPage.toString());
	}
}

