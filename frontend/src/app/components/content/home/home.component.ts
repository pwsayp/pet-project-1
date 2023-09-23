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
  currentPage: number = 0;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.listNews(this.currentPage, this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.listNews(this.currentPage, this.itemsPerPage);
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    return Array.from({ length: totalPages }, (_, i) => i);
  }

  private listNews(page: number, size: number) {
    this.newsService.getAllNews(page, size).subscribe( (news: any) => {
      console.log(news)
      this.news = news.content;
      this.totalItems = news.totalElements;
    })
  }

}
