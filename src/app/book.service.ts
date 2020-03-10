import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookService {

  constructor(private _http: HttpClient) { }

  getBooks(){
    return this._http.get('/api').toPromise();
  }
}

