import { Component, OnInit } from '@angular/core';
import { BorderedService } from '../../shared/bordered.service';
import {  BorderedTables } from '../../shared/bordered.models';

@Component({
  selector: 'app-striped2table',
  templateUrl: './striped2table.component.html',
  styles: []
})
export class Striped2tableComponent implements OnInit {

private borderedtables:  BorderedTables[] = [];
constructor(private borderedService:BorderedService){
}

ngOnInit() {
this.borderedService.getTables().subscribe((data)=>{this.borderedtables =data;
 console.log(this.borderedtables);
});
}

}
