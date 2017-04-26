import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()
export class AdminNotificationsService {
  baseUrl='https://admin-ef96d.firebaseio.com/';
  // Get Mails

  getMails():Observable<any>{
    return this._http.get(`${this.baseUrl}mails.json`)
      .map((response: Response) => response.json());

    }

  constructor(private _http:Http) { }

}
