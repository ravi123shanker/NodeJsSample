import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BasictableComponent } from './basictable/basictable.component';
import { BootstrapdocsComponent } from './bootstrapdocs/bootstrapdocs.component';

import { BorderedtableComponent } from './borderedtable/borderedtable.component';

import { ContextualtableComponent } from './contextualtable/contextualtable.component';
import { Striped2tableComponent } from './striped2table/striped2table.component';
import { StriptableComponent } from './striptable/striptable.component';
import { TablerouteComponent } from './tableroute/tableroute.component';
import {moduleRouting} from "./table.routing";
import { BorderedService } from "./shared/bordered.service";

@NgModule({
  imports: [
    CommonModule,
    moduleRouting,
    HttpModule
  ],
  declarations: [BasictableComponent,BootstrapdocsComponent,BorderedtableComponent,
  ContextualtableComponent,Striped2tableComponent,TablerouteComponent,StriptableComponent
  ],
  providers: [BorderedService]
})
export class TableModule { }
