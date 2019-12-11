import { Component, OnInit } from '@angular/core';
import { DashboardInfo } from '../../models/dashboardInfo';
import { DashboardService } from '../../services/dashboard.service';
import { ServerError } from 'src/app/shared/messages';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

	dashboardInfo: DashboardInfo;

	constructor(private dashboardService: DashboardService, private messageService: MessagesService) {
		this.dashboardInfo = new DashboardInfo();
	}

	ngOnInit() {
		this.dashboardService.getInfo().subscribe(dashInfo => {
			this.dashboardInfo = dashInfo;
		}, err => {
			this.messageService.showConfirmOrErrorMessage(ServerError);
		});
	}

}
