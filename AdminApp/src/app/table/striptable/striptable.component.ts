import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';
import { BorderedService } from '../shared/bordered.service';
import {  BorderedTables } from '../shared/bordered.models';

@Component({
  selector: 'app-striptable',
  templateUrl: './striptable.component.html',
  styles: [],

  animations:[
     trigger('slideRight',[
      transition('void=>*',[
        animate(1900,keyframes([
        style({transform:'translateX(-400px)',offset:0}) ,
        style({transform:'translateX(-305px)',offset:0.2}),
        style({transform:'translateX(-200px)',offset:0.3}),
        style({transform:'translateX(-75px)',offset:0.7}),
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
   ]
})
export class StriptableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;

});
}

}
