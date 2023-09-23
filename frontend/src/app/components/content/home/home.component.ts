import {Component, OnInit} from '@angular/core';
import {INews} from "../../../models/news";
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: INews[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.listNews();
  }

  private listNews() {
    this.newsService.getAllNews().subscribe( news => {
      this.news = news;
    })
  }

}
