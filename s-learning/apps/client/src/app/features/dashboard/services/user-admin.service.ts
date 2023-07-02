import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Users[]>(`/api/users`);
  }

  getById(id: string){
    return this.http.get<Users>(`/api/users/${id}`);
  }

  updateUser(id: string, user: Users){
    return this.http.put(`/api/users/${id}`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`api/users/${id}`);
  }
}

export interface Users{
  _id: string;
  username: string;
  email: string;
  createdAt: Date;
}
