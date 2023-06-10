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
}

export interface Gramset{
  name: string;
  content: string;
}
