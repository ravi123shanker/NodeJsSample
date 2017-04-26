import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import {TempdrivenComponent} from './forms/tempdriven/tempdriven.component';
import {DatadrivenComponent} from './forms/datadriven/datadriven.component';

// Route Configuration
const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/store', pathMatch:'full' },
    { path: 'store', component: StoreComponent },
    { path: 'cart', component: CartComponent },
    { path: 'tempdriven', component: TempdrivenComponent },
    { path: 'datadriven', component: DatadrivenComponent }
];
export const Router: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES);
