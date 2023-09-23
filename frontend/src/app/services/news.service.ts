import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllNews(page: number, size: number): Observable<INews[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<INews[]>('http://localhost:10030/api/v1/news', { params })
  }

}
