import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
      this.authService.logout();
      window.location.href = '/';
  }
}
