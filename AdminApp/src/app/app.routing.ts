import { Routes, RouterModule } from "@angular/router";

import {TableModule} from "./table/table.module";
import {DashModule} from "./dash/dash.module";
import {GridModuleModule} from "./grid-module/grid-module.module";
import {ChartsComponent} from "./charts/charts.component";

import {CollectionsModule} from "./collections/collections.module";
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/gridModule', pathMatch: 'full' },
  {path:'dashboardModule',loadChildren:'app/dash/dash.module#DashModule'},
   {path:'tablesModule',loadChildren:'app/table/table.module#TableModule'},
  {path:'gridModule',loadChildren:'app/grid-module/grid-module.module#GridModuleModule'},
  {path:'anotherModule',loadChildren:'app/collections/collections.module#CollectionsModule'}
  // {path:'charts',component:ChartsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
