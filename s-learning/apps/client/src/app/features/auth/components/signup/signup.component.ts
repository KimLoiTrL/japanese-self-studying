import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';
import { AuthService } from '../../auth.service';
import { NavigationControlService } from '../../navigation-control.service';

@Component({
  selector: 's-learning-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  errSignup = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private navigationControlService: NavigationControlService

  ) {
    this.signupForm = this.fb.group({
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    setTimeout(() => {
      this.navigationControlService.shouldDisplayNavigation = false;
    });
  }

  onSignup(){
    this.authService.signUp({
      username: this.signupForm.value.username, email: this.signupForm.value.email, password: this.signupForm.value.password}).subscribe((data: any) =>
    {
      if(data){
        window.location.href = '/login';
      }
    },
    (error: any) => {
      this.errSignup = error.error.message;
    }
   );
  }
}
