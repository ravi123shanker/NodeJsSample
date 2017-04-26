import { Component, OnInit ,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import {CommentsService} from '../../../shared/comments.service';
import {Collectable} from '../../../shared/collectable.models';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: [],
  animations:[
    trigger('slideLeft',[
     transition('void=>*',[
       animate(250,keyframes([
         style({transform:'translateX(300px)',offset:0}) ,
         style({transform:'translateX(0px)',offset:1})
       ]))
     ])
    ])
  ]

})
export class CommentsComponent implements OnInit {
private collectables :Collectable[]=[];
  constructor(private commentsService:CommentsService) { }

  ngOnInit() {
      this.commentsService.getComments().subscribe((data)=>{this.collectables=data});
  }

}
