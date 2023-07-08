import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrammarTopicService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<GramTopic[]>(`/api/gramsets`);
  }

  getById(id: string){
    return this.http.get<GramTopic>(`/api/gramsets/${id}`);
  }

  updateGramset(id: string, gramset: GramTopic){
    return this.http.put(`/api/gramsets/${id}`, gramset);
  }

  deleteGramset(id: string){
    return this.http.delete(`api/gramsets/${id}`);
  }

  createGramset(gramset: GramTopic){
    return this.http.post<GramTopic>(`api/gramsets`, gramset);
  }
}

export interface GramTopic{
  _id?: string;
  name: string;
  content: string;
  gramcards: string[];
}
