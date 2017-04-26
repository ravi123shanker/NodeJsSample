import { Component, OnInit } from '@angular/core';
import { BorderedService } from '../../shared/bordered.service';
import {  BorderedTables } from '../../shared/bordered.models';

@Component({
  selector: 'app-striptable',
  templateUrl: './striptable.component.html',
  styles: []
})
export class StriptableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;
 console.log(this.borderedtables);
});
}

}
