import { Router } from '@angular/router';
import { ArticleService } from './../article.service';
import { SelectService } from './../../shared/select.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
 articles$ : Observable<any>;
  constructor(
    private selectService: SelectService, 
    private articleService : ArticleService,
    private route : Router
  ) { }

  ngOnInit() {
    this.articles$ = this.selectService.select("article WHERE Status = 'Active' order by ArticleId desc");
  }

  Archive(article){
    let data = {
      ArticleId : article.ArticleId,
      Title: article.Title,
      issn: article.ISSN,
      Price: article.Price,
      abstract: article.Abstract,
      ImageUrl: article.ImageUrl,
      FileUrl : article.FileUrl,
      Status : "Disabled"  
    };
    debugger
    alert(`You About to De-Activate Article with ISSN : ${article.ISSN}`)
    this.articleService.disableArticle(data).subscribe(response => {
      if(response === "1"){
        alert(`Article Disabled`);
        this.route.navigate(["admin-dashboard"]);
      }
      else{
        alert(`Something Went Wrong`);
      }
    }); 
  }
}
