import { Component, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import{TaskpanelService} from '../../../shared/taskpanel.service';

@Component({
  selector: 'app-transactionpanel',
  templateUrl: './transactionpanel.component.html',
  styles: [],
  animations:[
   trigger('panelAnimate',[
  transition('void=>*',[
      animate(1500,keyframes([
       style({opacity:0,transform:'translateY(200px)',offset:0}),
       style({opacity:.3,transform:'translateY(150px)',offset:.3}),
        style({opacity:.5,transform:'translateY(100px)',offset:.5}),
            style({opacity:.8,transform:'translateY(50px)',offset:.8}),
      style({opacity:1,transform:'translateY(0px)',offset:1})
      ]))
   ])
  ])
  ]

})
export class TransactionpanelComponent implements OnInit {
private tranactionpanellist=[];
  constructor(private taskpanelService:TaskpanelService) { }

  ngOnInit() {
  this.taskpanelService.getTransactionPanel().subscribe((data)=>{this.tranactionpanellist =data});
  }

}
