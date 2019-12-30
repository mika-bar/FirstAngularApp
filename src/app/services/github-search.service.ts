import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends HttpHandler{

  public save(repositoryName:string){
    const url='githubSearches';
    return this.post(url,{repositoryName});

  }

  public getSearches(){
    const url='githubSearches/me';
    return this.get(url);
  }

}
