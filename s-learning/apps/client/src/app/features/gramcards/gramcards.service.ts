import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GramcardsService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Gramcard[]>(`/api/gramcards`);
  }

  getContentById(id: string){
    return this.http.get<Gramcard[]>(`/api/gramcards/${id}`);
  }

  getGramcardsByGramset(id: string): Observable<Gramcard[]>{
    return this.http.get<Gramcard[]>(`/api/gramsets/${id}/gramcards`)
  }
}

export interface Gramcard{
  name: string;
  define: string;
  structure: string[];
  add: string;
  ex: string;
  sub: string;
  ex_one: string;
  sub_one: string;
  set: string;
}
