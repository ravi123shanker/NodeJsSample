import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';

@Component({
  selector: 'app-bootstrapdocs',
  templateUrl: './bootstrapdocs.component.html',
  styles: [],

  animations:[
     trigger('slideRight',[
      transition('void=>*',[
        animate(6900,keyframes([
        style({transform:'translateX(-700px)',offset:0}) ,
        style({transform:'translateX(-500px)',offset:0.2}),
        style({transform:'translateX(-325px)',offset:0.3}),
        style({transform:'translateX(-110px)',offset:0.7}),
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
   ]

})
export class BootstrapdocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
