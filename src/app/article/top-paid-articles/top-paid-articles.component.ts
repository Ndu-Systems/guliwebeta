import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../shared/select.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-paid-articles',
  templateUrl: './top-paid-articles.component.html',
  styleUrls: ['./top-paid-articles.component.css']
})
export class TopPaidArticlesComponent implements OnInit {

  articles: any[];
  constructor(
    private selectService: SelectService,
    private router : Router
  ) { }

  ngOnInit() {
    this.articles = [];
    this.getAllArticles();
  }

  getAllArticles() {
    this.selectService.select("article order by ArticleId desc").subscribe(response => {
      if (response) {
        this.articles = response;
      }
    });
  }

  
  SelectedArticle(item){
    debugger
    this.router.navigate(['/view-article',  item.ArticleId ]);
  }

}
