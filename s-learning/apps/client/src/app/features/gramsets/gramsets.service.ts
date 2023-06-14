import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GramsetsService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Gramset[]>(`/api/gramsets`);
  }

  getGramsetById(id: string){
    return this.http.get<Gramset>(`/api/gramsets/${id}`);
  }
}

export interface Gramset{
  _id: string;
  name: string;
  content: string;
  gramcards: string[];
}
