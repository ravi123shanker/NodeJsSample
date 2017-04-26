


import { Routes, RouterModule } from "@angular/router";


import { TablerouteComponent } from './tableroute/tableroute.component';


const MODULE_ROUTES: Routes = [
  { path: '', component: TablerouteComponent }

  ];
export const moduleRouting = RouterModule.forChild(MODULE_ROUTES);
