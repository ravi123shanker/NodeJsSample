import { Routes, RouterModule } from "@angular/router";
import { DashforGridComponent } from './dashfor-grid/dashfor-grid.component';
import {BootGridComponent} from './boot-grid/boot-grid.component';
const GRID_ROUTES: Routes = [
  { path: '', component: DashforGridComponent }
];

export const gridRouting = RouterModule.forChild(GRID_ROUTES);
