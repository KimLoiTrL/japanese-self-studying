import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) { }

  login(data: { email: string, password: string }) {
    return this.http.post('/api/auth/login', data)
      .pipe(
        tap((data: any) => {
          // this.storageService.setItem("id", data.user._doc._id);
          this.storageService.setAccessToken(data.token);
        })
      )
  }

  signUp(data: { username: string, email: string, password: string }) {
    return this.http.post('/api/auth/signUp', data)
      .pipe(
        tap((data: any) => {
          // this.storageService.setItem("id", data.user._doc._id);
          this.storageService.setAccessToken(data.token);
        })
      )
  }
}
