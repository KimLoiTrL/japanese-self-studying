import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users, UserAdminService } from '../services/user-admin.service';

declare let window: any;

@Component({
  selector: 's-learning-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss'],
})
export class UserAdminComponent implements OnInit{

  userList : Users[] = [];
  config: any;
  displayEdit = "none";
  displayDelete = "none";
  userEditForm! : FormGroup;
  selectedUser!: Users;
  editedUser!: Users;

  constructor(
    private userAdminService: UserAdminService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void{
    this.getAllUser();
    this.loadPage();
    this.userEditForm = this.formBuilder.group({
      username: [''],
      email: ['']
    });
  }

  getAllUser() {
    this.userAdminService.get().subscribe((data) => {
      this.userList = data;
    })
  }

  pageChanged (event: any){
    this.config.currentPage = event;
  }

  loadPage = () => {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      ellipses : false
    };
  }

  openEditModal(user: Users) {
    this.selectedUser = user;
    this.displayEdit = "block";
    this.userEditForm.patchValue({
      username: user.username,
      email: user.email
    });
  }

  openDeleteModal(user: Users) {
    this.selectedUser = user;
    this.displayDelete = "block";
  }

  onCloseHandled() {
    this.displayEdit = "none";
    this.displayDelete = "none";
  }

  editUser() {
    const id = this.selectedUser?._id;
    const updatedUser: Users = {
      _id: id,
      username: this.userEditForm.value.username,
      email: this.userEditForm.value.email,
      createdAt: this.userEditForm.value.createdAt
    };

    this.userAdminService.updateUser(id, updatedUser).subscribe(() => {
      this.getAllUser();
      this.onCloseHandled();
    });
  }

  deleteUser(){
    const id = this.selectedUser?._id;
    this.userAdminService.deleteUser(id).subscribe(() => {
      this.getAllUser();
      this.onCloseHandled();
    })
  }
}
