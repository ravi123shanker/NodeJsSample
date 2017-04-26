import { Component, OnInit } from '@angular/core';
import {AdminNotificationsService} from '../../shared/admin-notifications.service';
@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styles: []
})
export class MailsComponent implements OnInit {
  private mails =[];
  constructor(private adminNotificationsService:AdminNotificationsService) { }

  ngOnInit() {
    this.adminNotificationsService.getMails().subscribe((data)=>this.mails=data)
  }

}
