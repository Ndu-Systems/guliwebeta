import { ViewArticleService } from './view-article.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  ArticleId : number;
  article: any;
  user: any;
  name: any;
  message: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewArticleService: ViewArticleService
  ) { }

  ngOnInit() {
    debugger
    this.ArticleId = parseInt(this.route.snapshot.paramMap.get("ArticleId"));
    this.ViewArticle(this.ArticleId);
  }
  ViewArticle(ArticleId){
    debugger
    this.viewArticleService.viewArticle(ArticleId)
    .subscribe(response =>{
      if(response){
        this.article = response.Articles[0];
      }
      else{
        this.message = "No Article Found";
      }
    })
  }

  TopPaid(){
    this.router.navigate(['/top-paid']);
  }
}
