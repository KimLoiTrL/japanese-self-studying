import { Component } from '@angular/core';
import { LocalStorageService } from '../../features/auth/local-storage.service';

@Component({
  selector: 's-learning-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  token: any;
  userInfo: any;

  constructor(
      private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
      this.token = this.localStorageService.getAccessToken();
      this.userInfo = this.localStorageService.getItem("id");
  }
}
