import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';
import { AuthService } from '../../auth.service';
import { NavigationControlService } from '../../navigation-control.service';

@Component({
  selector: 's-learning-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  shouldDisplayNavigation = false;

  loginForm!: FormGroup;
  errLogin = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private navigationControlService: NavigationControlService

  ) {
    this.loginForm = this.fb.group({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    this.navigationControlService.shouldDisplayNavigation = false;
  }

  onLogin(){
    this.authService.login({email: this.loginForm.value.email, password: this.loginForm.value.password}).subscribe((data: any) =>
    {
      if (data.user.role === 'admin') {
        window.location.href = '/dashboard/manager';
      } else {
        window.location.href = '/home';
      }
    },
    (error: any) => {
      this.errLogin = error.error.message;
    }
  );
}
}
