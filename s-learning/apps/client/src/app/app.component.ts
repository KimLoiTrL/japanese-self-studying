import { Component } from '@angular/core';
import { NavigationControlService } from './features/auth/navigation-control.service';

@Component({
  selector: 's-learning-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  public navigationControlService: NavigationControlService;

  constructor(private _navigationControlService: NavigationControlService) {
    this.navigationControlService = _navigationControlService;
  }
}
