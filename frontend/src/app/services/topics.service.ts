import {Injectable} from '@angular/core';
import {ITopic} from "../models/topic";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(
      private httpClient: HttpClient
  ) {}

  getAllTopics(): Observable<ITopic[]> {
    return this.httpClient.get<ITopic[]>('http://localhost:10030/api/v1/topics')
  }

  getTopicById(id: string): Observable<ITopic> {
    return this.httpClient.get<ITopic>(`http://localhost:10030/api/v1/topics/${id}`)
  }

  deleteTopicById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:10030/api/v1/topics/${id}`)
  }

}
