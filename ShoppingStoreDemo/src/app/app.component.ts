import { Component } from '@angular/core';
import { StoreService } from './shared/service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoreService]
})
export class AppComponent {
  title = 'app works!';
}
