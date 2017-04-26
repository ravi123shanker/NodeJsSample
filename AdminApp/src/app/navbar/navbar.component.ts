import { Component, OnInit , trigger,state,style,transition,animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [],
  animations:[
    trigger('navPanelAnimate',[
      state('inactive',style({
        transform:'scale(1)',
        backgroundColor:'black'
      })),
      state('active',style({
        transform:'scale(1.1)',
        backgroundColor:'blue'
      })),
      transition('inactive =>active',animate('100ms ease-in')),
      transition('inactive =>active',animate('100ms ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  state:String='inactive';
  constructor() { }
  toggleMove(){
    this.state=(this.state=='inactive' ?'active' :'inactive')
  }
  ngOnInit() {
  }

}
