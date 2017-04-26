import { Component, OnInit,trigger,transition,animate,style,keyframes} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
  animations:[
    trigger('slideLeft',[
      transition('void => *',[
        animate(1000,keyframes([
          style({opacity:0,transform:'translateX(-200px)',offset:0}),
          style({opacity:.5,transform:'translateX(-100px)',offset:.5}),
          style({opacity:1,transform:'translateX(0px)',offset:1})

        ]))
      ])
    ])
  ]
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
