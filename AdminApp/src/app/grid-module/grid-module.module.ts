import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {gridRouting} from "./grid-module.routing";
import {BootGridComponent} from './boot-grid/boot-grid.component';
import { DashforGridComponent } from './dashfor-grid/dashfor-grid.component';
@NgModule({
  imports: [
    SharedModule,gridRouting
  ],
  declarations: [BootGridComponent, DashforGridComponent]
})
export class GridModuleModule { }
