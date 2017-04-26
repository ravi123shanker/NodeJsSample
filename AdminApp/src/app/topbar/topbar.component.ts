import { Component, OnInit , trigger,state,style,transition,animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [],
  animations:[
    trigger('movePanel',[
      transition('void=> *',[
        animate(2000,keyframes([
          // style({opacity:0,transform:'translateY(-200px)',offset:0}),
          // style({opacity:.5,transform:'translateY(-200px)',offset:.5}),
          // style({opacity:1,transform:'translateY(-200px)',offset:1})
          style({opacity:0,offset:0}),
          style({opacity:.25,offset:0.25}),
          style({opacity:.5,offset:.5}),
          style({opacity:1,offset:1})

        ]))
      ])
    ])
  ]
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
