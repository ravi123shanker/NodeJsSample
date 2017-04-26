import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    private items=[];
    private kartItems=[];

	setItems(items){
		this.items=items;
	}

    getItems(){
        return this.items;
    }

    addToKart(item){
        if(this.kartItems.indexOf(item) == -1){
            this.kartItems.push(item);
        }
    }

    removeFromKart(item){
        this.kartItems.splice(this.kartItems.indexOf(item), 1);
    }
    getKartItems(){
        return this.kartItems;
    }

}