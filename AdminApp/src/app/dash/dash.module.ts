import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashWrapperComponent } from './dash-wrapper/dash-wrapper.component';
import {dashRouting} from './dash-routing';
import { DashboradheaderComponent } from './dash-wrapper/dashboradheader/dashboradheader.component';
import {NotificationComponent} from './dash-wrapper/notification/notification.component';
import { PanelComponent } from './dash-wrapper/panel/panel.component';
import { TaskpanelComponent } from './dash-wrapper/panel/taskpanel/taskpanel.component';
import { TransactionpanelComponent } from './dash-wrapper/panel/transactionpanel/transactionpanel.component';
import { CommentsComponent } from './dash-wrapper/notification/comments/comments.component';
import { TasksComponent } from './dash-wrapper/notification/tasks/tasks.component';
import { DetailsComponent } from './dash-wrapper/notification/details/details.component';
import { TicketsComponent } from './dash-wrapper/notification/tickets/tickets.component';
import{CommentsService} from './shared/comments.service';
import {TaskpanelService} from './shared/taskpanel.service';
@NgModule({
  imports: [
    SharedModule,dashRouting
  ],
  declarations: [DashWrapperComponent,
    DashboradheaderComponent,
    NotificationComponent,
    PanelComponent,
TaskpanelComponent,
TransactionpanelComponent,
CommentsComponent,
TasksComponent,
DetailsComponent,
TicketsComponent
 ],
 providers:[TaskpanelService,CommentsService]
})
export class DashModule { }
