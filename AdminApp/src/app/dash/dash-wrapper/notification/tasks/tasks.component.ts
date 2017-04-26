import { Component, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import {CommentsService} from '../../../shared/comments.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [],
  animations:[
    trigger('slide',[
     transition('void=>*',[
       animate(1000,keyframes([
         style({transform:'translateX(1000px)',offset:0}) ,
         style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
  ]
})
export class TasksComponent implements OnInit {
private collectables=[];
  constructor(private commentsService:CommentsService ) { }

  ngOnInit() {
    this.commentsService.getTasks().subscribe((data)=>{this.collectables=data});
  }

}
