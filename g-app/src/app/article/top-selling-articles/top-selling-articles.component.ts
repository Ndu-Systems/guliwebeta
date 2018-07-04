import { ArticleService } from './../article.service';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling-articles',
  templateUrl: './top-selling-articles.component.html',
  styleUrls: ['./top-selling-articles.component.css']
})
export class TopSellingArticlesComponent implements OnInit {

  articles$ : Observable<any[]>;
  constructor(
    private articleService : ArticleService
  ) { }

  ngOnInit() {
    this.articles$  =this.articleService.getTopSellingArticles();
  } 
}
