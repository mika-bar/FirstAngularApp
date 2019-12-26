import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repositories, Repository } from './repositories-model.model';
import { Pagination } from '../models/pagination';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { TableCol } from '../models/tableCol';
import { SharedDataService } from '../services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MessagesService } from 'src/app/services/messages.service';
import { GithubSearchService } from '../services/github-search.service';

// import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  error = new Subject<string>();
  public repositoriesArray: Repository[] = [];
  public repositoryName = '';
  public form: FormGroup;
	public pagination: Pagination;
  // public totalPages: number = 1;
  public totalPages: number;
	public pageUsers: User[] = [];
	public loadingUsers: boolean = false;
  public cols: TableCol[] = [];
  public itemPerPage = 15;


	constructor(private http: HttpClient,private userService: UserService, private sharedData: SharedDataService,
		private router: Router, private r: ActivatedRoute, private dialog: MatDialog,
		private fb: FormBuilder, private messageService: MessagesService, private githubSearchService: GithubSearchService) {
		this.createColsTableItem();
		this.form = fb.group({
			name_search: [''],
		});
	}

	ngOnInit() {
		this.pagination = new Pagination(1, this.itemPerPage);
	}

	createColsTableItem() {
		// this.cols.push(new TableCol('RepositoryName', 'name', 'string'));
		// this.cols.push(new TableCol('Private', 'private','boolen'));
		// this.cols.push(new TableCol('URL', 'html_url','url'));
		// this.cols.push(new TableCol('Language', 'language','string'));
    // this.cols.push(new TableCol('NumOfStars', 'stargazers_count','number'));
    this.cols.push(new TableCol('RepositoryName', 'name', 'repo-name'));
		this.cols.push(new TableCol('Private', 'private','text'));
		this.cols.push(new TableCol('URL', 'html_url','url'));
		this.cols.push(new TableCol('Language', 'language','text'));
		this.cols.push(new TableCol('NumOfStars', 'stargazers_count','text'));
    
	}

  onSubmit() {
    // if (!form.valid) {
    //   return;
    // }
    this.repositoriesArray=[];

    //let name = form.value.repositoryName;

    let getObs: Observable<any>;

    this.githubSearchService.save(this.repositoryName).subscribe(res=>{
      console.log(res.body);
    },err=>{
      console.log(err.message);
    })
    

    // authObs = this.authService.login(email, password);
    getObs = this.http.get(`https://api.github.com/search/repositories?per_page=${this.itemPerPage}&page=${this.pagination.page}&q=${this.repositoryName}+in:name`)

    getObs.subscribe(
      (responseData: Repositories) => {

        // console.log(responseData);
        this.totalPages = Math.floor(responseData.total_count / this.itemPerPage);
        responseData.items.forEach(result => {
         
          const currentRepository = {
            name: result.name,
            private: result.private,
            html_url: result.html_url,
            language: result.language,
            stargazers_count: result.stargazers_count
          }
          if(currentRepository.language === null){
            currentRepository.language='no language';
          }
          this.repositoriesArray.push(currentRepository);
          
        })
        console.log(this.repositoriesArray);
      },
      error => {
        //delete this if not needed
        this.error.next(error.message);
      }
    );
    //this.repositoryName = '';
    //form.reset();
  }

  nextPage() {
		if (this.totalPages > this.pagination.page) {
      this.pagination.page++;
      this.onSubmit()
		}
	}

	prevPage() {
		if (this.pagination.page > 1) {
      this.pagination.page--;
      this.onSubmit()
		}
	}

}
