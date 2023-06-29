import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LocalStorageService } from '../auth/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient,
    private localStorageService: LocalStorageService) { }

  editProfile(id: string, user: {username: string, email: string }) {
    return this.http.put(`/api/users/${id}`, user).pipe(
      tap((data: any) => {
        const updatedUserInfo = { ...this.localStorageService.getItem('id'), ...user };
        this.localStorageService.setItem('id', updatedUserInfo);
      })
    );
  }
}
