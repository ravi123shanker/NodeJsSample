import { Routes, RouterModule } from "@angular/router";
import { CollectionComponent } from "./collection/collection.component";
import { MarketComponent } from "./market/market.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const COLL_ROUTES: Routes = [
  { path: '', component: DashboardComponent,children:[
    { path: '', redirectTo: 'market', pathMatch: 'full' },
    { path: 'collection', component: CollectionComponent },
    { path: 'market', component: MarketComponent }
  ] }

];

export const collRouting = RouterModule.forChild(COLL_ROUTES);
