import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utils } from '../../shared/utils';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public activeLink: string;
	public subActiveLink: string;

	constructor(public router: Router, private authService: AuthService) { }

	ngOnInit() {
		const currentUrl = this.router.url;
		this.setStartingLink(currentUrl);
	}
	public logout() {
		this.authService.logout();
	}

	public setActiveLink(link: string) {
		if (this.activeLink !== link) {
			this.activeLink = link;
		}
	}

	public setSubActiveLink(subLink: string = undefined) {
		if (this.subActiveLink !== subLink) {
			this.subActiveLink = subLink;
		}
	}

	private setStartingLink(url: string) {
		const urlArray = url.split('/');
		this.activeLink = urlArray[2];
	}

}
