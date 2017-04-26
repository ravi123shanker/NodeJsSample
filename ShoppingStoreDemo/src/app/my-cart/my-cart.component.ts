import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/service/store.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  private kartItems=[];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.kartItems=this.storeService.getKartItems();
  }
  removeFromKart(kartItem){
    this.storeService.removeFromKart(kartItem);
  }
}
