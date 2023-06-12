import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getCardsBySet(id: string): Observable<Card[]>{
    return this.http.get<Card[]>(`/api/sets/${id}/cards`)
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
}
