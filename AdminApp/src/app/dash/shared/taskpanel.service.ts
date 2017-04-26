import {Task} from './taskpanel.models';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()
export class TaskpanelService{
baseApi="https://trial-1c066.firebaseio.com/";
baseApi1="https://trial-1c066.firebaseio.com/";
private Taskpanellist:Task[] =[];

//funtion to get task list
getTaskpanel(){
  return this.http.get(this.baseApi+'getTask.json')
    .map((response: Response) => response.json());
}
// function to get transaction list
getTransactionPanel(){
return this.http.get(this.baseApi1+'getTransaction.json')
  .map((response: Response) => response.json());
}
constructor(private http:Http) {
}
}
