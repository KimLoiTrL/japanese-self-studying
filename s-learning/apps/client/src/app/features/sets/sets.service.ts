import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Set[]>("http://localhost:3000/api/sets");
  }
}

export interface Set{
  _id: string;
  set_id: string;
  name: string;
  imageUrl: string;
}

