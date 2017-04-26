import { Component, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import {CommentsService} from '../../../shared/comments.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
  animations:[

    trigger('slideLeft',[
     transition('void=>*',[
       animate(1750,keyframes([
         style({transform:'translateX(1600px)',offset:0}) ,

         style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
  ]
})
export class DetailsComponent implements OnInit {
private collectables =[];
  constructor(private commentsService:CommentsService) { }

  ngOnInit() {
    this.commentsService.getOrders().subscribe((data)=>{this.collectables=data});
  }

}
