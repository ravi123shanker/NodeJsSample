import { Routes, RouterModule } from "@angular/router";

import { DashWrapperComponent } from "./dash-wrapper/dash-wrapper.component";
// import {commentRoute} from "./dash-wrapper/notification/comments/comments.routing";
const DASH_ROUTES: Routes = [
  { path: '', component: DashWrapperComponent
  
 }

];

export const dashRouting = RouterModule.forChild(DASH_ROUTES);
