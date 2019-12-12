import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repositories, Repository } from './repositories-model.model';


// import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  error = new Subject<string>();
  public repositoriesArray: Repository[] = [];
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let name = form.value.repositoryName;

    let getObs: Observable<any>;

    // authObs = this.authService.login(email, password);
    getObs = this.http.get(`https://api.github.com/search/repositories?q=${name}+in:name`)

    getObs.subscribe(
      (responseData: Repositories) => {

        // console.log(responseData);

        responseData.items.forEach(result => {
          const currentRepository = {
            name: result.name,
            private: result.private,
            url: result.url,
            language: result.language,
            stargazers_count: result.stargazers_count
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
    form.reset();
  }

}
