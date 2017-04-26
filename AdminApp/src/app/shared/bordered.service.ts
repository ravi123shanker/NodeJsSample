

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()

export class BorderedService {

  baseApi = 'https://trial-1c066.firebaseio.com/getTable.json';
  constructor(private http: Http) {
  }

  getTables() {
    return this.http.get(this.baseApi).map((response: Response) => response.json());
  }

}
