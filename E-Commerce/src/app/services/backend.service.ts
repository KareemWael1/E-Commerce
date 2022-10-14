import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly rootUrl : string;

  constructor(private http: HttpClient) {
    this.rootUrl = 'http://localhost:1000';
  }

  get(url: string){
    return this.http.get(this.rootUrl + url);
  }

  post(url: string, body: Object){
    return this.http.post(this.rootUrl + url, body);
  }

  delete(url: string){
    return this.http.delete(this.rootUrl + url);
  }
}
