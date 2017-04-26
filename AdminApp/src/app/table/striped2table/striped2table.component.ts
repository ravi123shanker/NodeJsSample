import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';
import { BorderedService } from '../shared/bordered.service';
import {  BorderedTables } from '../shared/bordered.models';

@Component({
  selector: 'app-striped2table',
  templateUrl: './striped2table.component.html',
  styles: [],

  animations:[
     trigger('slideRight',[
      transition('void=>*',[
        animate(3000,keyframes([
        style({transform:'translateX(-500px)',offset:0}) ,
        style({transform:'translateX(-300px)',offset:0.2}),
        style({transform:'translateX(-250px)',offset:0.3}),
        style({transform:'translateX(-150px)',offset:0.7}),
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
   ]
})
export class Striped2tableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;

});
}

}
