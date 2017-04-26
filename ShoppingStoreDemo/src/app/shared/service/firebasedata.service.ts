import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FirebasedataService {
  apiBaseUrl="https://fir-databasetest-cc23b.firebaseio.com/";

  constructor(private http: Http) { }
  getStoreData(){
    let apiUrl=`${this.apiBaseUrl}.json`;
    return this.http.get(apiUrl).map((responseData: Response) => responseData.json());
  }
}
