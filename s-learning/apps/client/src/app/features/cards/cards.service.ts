import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Card[]>(`/api/cards`);
  }

  getContent(id: string){
    return this.http.get<Card[]>(`/api/cards/${id}`);
  }
}

export interface Card{
  _id: string;
  card_id: string;
  word: string;
  pronunciation: string;
  define: string;
  part: string;
  example: string;
  trans: string;
  set: string;
  set_id: string;
}
