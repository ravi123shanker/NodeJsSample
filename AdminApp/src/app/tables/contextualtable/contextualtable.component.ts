import { Component, OnInit } from '@angular/core';

import { BorderedService } from '../../shared/bordered.service';
import {  BorderedTables } from '../../shared/bordered.models';


@Component({
  selector: 'app-contextualtable',
  templateUrl: './contextualtable.component.html',
  styles: []
})
export class ContextualtableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;
 console.log(this.borderedtables);
});
}

}
