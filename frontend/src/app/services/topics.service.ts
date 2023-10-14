import {Injectable} from '@angular/core';
import {ITopic} from "../models/topic";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  baseUrl: string = 'http://localhost:10030/api/v1/topics'
  mockUrl: string = 'http://localhost:3000/topics'

  constructor(
      private httpClient: HttpClient
  ) {}

  getAllTopics(): Observable<ITopic[]> {
    return this.httpClient.get<ITopic[]>(this.mockUrl)
  }

  getTopicById(id: string): Observable<ITopic> {
    return this.httpClient.get<ITopic>(`${this.mockUrl}/${id}`)
  }

  deleteTopicById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.mockUrl}/${id}`)
  }

}
