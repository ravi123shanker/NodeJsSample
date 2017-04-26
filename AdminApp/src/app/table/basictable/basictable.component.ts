import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';

import { BorderedService } from '../shared/bordered.service';
import {  BorderedTables } from '../shared/bordered.models';


@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styles: [],

  animations:[
     trigger('slideRight',[
      transition('void=>*',[
        animate(5500,keyframes([
        style({transform:'translateX(-600px)',offset:0}) ,
        style({transform:'translateX(-450px)',offset:0.2}),
        style({transform:'translateX(-250px)',offset:0.3}),
        style({transform:'translateX(-75px)',offset:0.7}),
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
   ]
})
export class BasictableComponent implements OnInit {

   private borderedtables:  BorderedTables[] = [];
  constructor(private borderedService:BorderedService){
  }

  ngOnInit() {
  this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;
  });
  }

}
