import { Component, OnInit , trigger,state,style,transition,animate,keyframes} from '@angular/core';
@Component({
  selector: 'app-dash-wrapper',
  templateUrl: './dash-wrapper.component.html',
  styles: [],

  animations:[
    trigger('slideLeft',[
      transition('void => *',[
        animate(1000,keyframes([
          style({opacity:0,transform:'translateY(-200px)',offset:0}),
          style({opacity:.5,transform:'translateY(-100px)',offset:.5}),
          style({opacity:1,transform:'translateY(0px)',offset:1})

        ]))
      ])
    ])
  ]
})
export class DashWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
