import { Component, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import {CommentsService} from '../../../shared/comments.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styles: [],
  animations:[
    trigger('slideLeft',[
     transition('void=>*',[
       animate(2400,keyframes([
        style({transform:'translateX(2000px)',offset:0}) ,
        style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
  ]
})
export class TicketsComponent implements OnInit {
private collectables =[];
  constructor(private commentsService:CommentsService) { }

  ngOnInit() {
      this.commentsService.getTickets().subscribe((data)=>{this.collectables=data});
  }

}
