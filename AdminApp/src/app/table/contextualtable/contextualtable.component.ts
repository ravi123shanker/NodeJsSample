import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';

import { BorderedService } from '../shared/bordered.service';
import {  BorderedTables } from '../shared/bordered.models';


@Component({
  selector: 'app-contextualtable',
  templateUrl: './contextualtable.component.html',
  styles: [],

  animations:[
     trigger('slideRight',[
      transition('void=>*',[
        animate(8700,keyframes([
        style({transform:'translateX(-800px)',offset:0}) ,
        style({transform:'translateX(-625px)',offset:0.2}),
        style({transform:'translateX(-420px)',offset:0.3}),
        style({transform:'translateX(-175px)',offset:0.7}),
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
   ]
})
export class ContextualtableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;

});
}

}
