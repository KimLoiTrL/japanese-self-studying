import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Set[]>(`/api/sets`);
  }

  getSetById(id: string){
    return this.http.get<Set>(`/api/sets/${id}`);
  }
}

export interface Set{
  _id: string;
  name: string;
  imageUrl: string;
  cards: string[]
}

