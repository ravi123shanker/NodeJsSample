import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';

import { BorderedService } from '../shared/bordered.service';
import {  BorderedTables } from '../shared/bordered.models';

@Component({
  selector: 'app-borderedtable',
  templateUrl: './borderedtable.component.html',
  styles : [],

animations:[
   trigger('slideRight',[
    transition('void=>*',[
      animate(3800,keyframes([
      style({transform:'translateX(-515px)',offset:0}) ,
      style({transform:'translateX(-350px)',offset:0.2}),
      style({transform:'translateX(-275px)',offset:0.3}),
      style({transform:'translateX(-100px)',offset:0.7}),
      style({transform:'translateX(0px)',offset:1})
     ]))
   ])
  ])
 ]
})
export class BorderedtableComponent implements OnInit {

   private borderedtables:  BorderedTables[] = [];
  constructor(private borderedService:BorderedService){
  }

  ngOnInit() {
  this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;

  });
  }

}
