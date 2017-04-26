import { Component, OnInit , trigger,state,style,transition,animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-boot-grid',
  templateUrl: './boot-grid.component.html',
  styles: [],
  animations:[
     trigger('gridAnim',[
       transition('void => *',[
         animate(1000,keyframes([
           style({opacity:0,transform:'translateY(200px)',offset:0}),
           style({opacity:.5,transform:'translateY(100px)',offset:.5}),
           style({opacity:1,transform:'translateY(0px)',offset:1})
           // style({opacity:0,offset:0}),
           // style({opacity:.25,offset:.5}),
           // style({opacity:1,offset:1})

         ]))
       ])
     ])
  ]
})
export class BootGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
