import { Injectable } from '@angular/core';
import { HttpHandler } from './httpHandler';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends HttpHandler{

  public save(repoName:string){
    const url='githubSearch';
    return this.post(url,{repoName});

  }
}
