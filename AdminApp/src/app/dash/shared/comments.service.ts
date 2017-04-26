import {Collectable} from './collectable.models';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()
export class CommentsService{

 baseApi="https://market-d0fc0.firebaseio.com/";
//api for getting comments
getComments(){
  return this.http.get(this.baseApi+'comments.json')
    .map((response: Response) => response.json());
//api for getting tasks
}
getTasks(){
  return this.http.get(this.baseApi+'taska.json')
  .map((response:Response)=> response.json());
}
//api for getting orders
getOrders(){
  return this.http.get(this.baseApi+'orders.json')
  .map((response:Response)=> response.json());
}
//api for getting tickets
getTickets(){
  return this.http.get(this.baseApi+'tickets.json')
  .map((response:Response)=> response.json());
}
 constructor (private http: Http) {}

}
