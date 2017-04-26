


import { BorderedTables } from "./bordered.models";
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()

export class BorderedService {
//api for getting bordered table
  baseApi = 'https://trial-1c066.firebaseio.com/getTable.json';
     private borderedtables:  BorderedTables[] = [];


    constructor(private http: Http) {
  }

  getTables() {
    return this.http.get(this.baseApi).map((response: Response) => response.json());
  }

}
