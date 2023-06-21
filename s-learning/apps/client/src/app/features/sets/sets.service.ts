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

  FillmaskByNagisa(){
    return this.http.get<any[]>(`http://localhost:8000/fillmask`);
  }
}

export interface Set{
  _id: string;
  name: string;
  imageUrl: string;
  cards: string[]
}

