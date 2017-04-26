import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotificationroutingComponent} from '../notificationrouting/notificationrouting.component';
export const commentRoute: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'comment',  component:NotificationroutingComponent },
];
