import { UserDataService } from './../../shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../shared/select.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-top-paid-articles',
  templateUrl: './top-paid-articles.component.html',
  styleUrls: ['./top-paid-articles.component.css']
})
export class TopPaidArticlesComponent implements OnInit {
 

  articles: any[]= [];
  user : User;
  constructor(
    private selectService: SelectService,
    private router : Router, 
    private userDataService: UserDataService
  ) { }

  ngOnInit() { 
    this.GetUser();
    this.getAllArticles();  
  }
  GetUser(): any {
    this.user = this.userDataService.getUser();
    if(this.user){
      console.log("user logged in");
    }
    else{
      console.log("insecure connection");
    }
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
