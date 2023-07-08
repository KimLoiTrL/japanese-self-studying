import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocabTopicService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<VocabTopic[]>(`/api/sets`);
  }

  getById(id: string){
    return this.http.get<VocabTopic>(`/api/sets/${id}`);
  }

  updateVocabTopic(id: string, vocab: VocabTopic){
    return this.http.put(`/api/sets/${id}`, vocab);
  }

  deleteVocabTopic(id: string){
    return this.http.delete(`api/sets/${id}`);
  }

  createVocabTopic(vocab: VocabTopic){
    return this.http.post<VocabTopic>(`api/sets`, vocab);
  }
}

export interface VocabTopic{
  _id?: string;
  name: string;
  imageUrl: string;
  cards: string[];
}
