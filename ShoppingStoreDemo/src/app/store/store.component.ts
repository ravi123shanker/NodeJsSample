import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/service/store.service';
import { FirebasedataService } from '../shared/service/firebasedata.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [FirebasedataService]
})
export class StoreComponent implements OnInit {
	private items=[];
  	constructor(private storeService: StoreService, private firebasedataService: FirebasedataService) { }

  	ngOnInit() {
		this.firebasedataService.getStoreData().subscribe((responseData: any)=>{
			this.storeService.setItems(responseData);
			this.items=this.storeService.getItems();
		});
  	}

	addToKart(item){
		this.storeService.addToKart(item);
	}
}
