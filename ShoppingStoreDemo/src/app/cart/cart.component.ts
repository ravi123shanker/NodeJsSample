import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/service/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private kartItems=[];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.kartItems=this.storeService.getKartItems();
  }
  removeFromKart(item){
    this.storeService.removeFromKart(item);
  }
  byKartItems(){
    console.log("By Items: "+this.storeService.getKartItems().length);
  }
}
