import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenDropdownDirective } from './shared/open-dropdown.directive';

import { WrapperComponent } from './wrapper/wrapper.component';

// import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import {AdminNotificationsService} from './shared/admin-notifications.service';
import { MailsComponent } from './topbar/mails/mails.component';
import { AlertsComponent } from './topbar/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    NavbarComponent,
    OpenDropdownDirective,
    WrapperComponent,

    ChartsComponent,
    MailsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AdminNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
