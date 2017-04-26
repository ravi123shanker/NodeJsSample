import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { CollectableService } from "./shared/collectable.service";
import {collRouting} from "./collection.routing";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollheaderComponent } from './collheader/collheader.component';

@NgModule({
  imports: [
    CommonModule,collRouting
  ],
  declarations: [CollectionComponent, MarketComponent, DashboardComponent, CollheaderComponent],
  providers: [CollectableService]

})
export class CollectionsModule { }
