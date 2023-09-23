import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllNews(): Observable<INews[]> {
    return this.httpClient.get<INews[]>('http://localhost:10030/api/v1/news')
  }

}
