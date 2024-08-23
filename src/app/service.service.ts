import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  url = "localhost:3000"
  constructor(private _http: HttpClient) { }

  postBooks(books: any) {
    return this._http.post(`${this.url}/books`, books);
  }

  postAuthors(authors: any) {
    return this._http.post(`${this.url}/authors`, authors);
  }
}
