import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../auth/local-storage.service';
import { UsersService } from '../users.service';

@Component({
  selector: 's-learning-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {

  userInfo: any;
  display = "none";
  profileEditForm! : FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    this.profileEditForm = this.fb.group({
      profileName: new FormControl('', [Validators.required]),
      profileEmail: new FormControl('', [Validators.required]),
      profilePw: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.userInfo = this.localStorageService.getItem("id");
    console.log(this.userInfo);
  }

  openModal() {
    this.display = "block";
    this.profileEditForm.patchValue({
      profileName: this.userInfo.username,
      profileEmail: this.userInfo.email,
    });
  }

  onCloseHandled() {
    this.display = "none";
  }

  editProfile(){
    this.userService.editProfile(this.userInfo._id, {
      username: this.profileEditForm.value.profileName,
      email: this.profileEditForm.value.profileEmail
    }).subscribe((data: any) => {
      if (data) {
        this.userInfo.username = this.profileEditForm.value.profileName;
        this.userInfo.email = this.profileEditForm.value.profileEmail;
        window.location.href = '/profile/edit';
      }
    });
  }
}
