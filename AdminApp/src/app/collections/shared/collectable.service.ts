import { Collectable } from "./collectable.model";
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
@Injectable()
export class CollectableService {

   baseApi='https://djonang-14325.firebaseio.com/getMarket.json';
  private collectables: Collectable[] = [];
  private collection: Collectable[] = [];
  constructor(private http: Http){
  }
  getCollectables() {
    return this.http.get(this.baseApi).map((response:Response)=>response.json());
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
