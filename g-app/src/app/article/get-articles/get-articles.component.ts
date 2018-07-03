import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../shared/select.service';

@Component({
  selector: 'app-get-articles',
  templateUrl: './get-articles.component.html',
  styleUrls: ['./get-articles.component.css']
})
export class GetArticlesComponent implements OnInit {

  articles : any[];
  constructor(
    private selectService: SelectService
  ) { }

  ngOnInit() {
    this.articles = [];
    this.getAllArticles();
  }

  getAllArticles(){
    this.selectService.select("article order by ArticleId desc").subscribe(response =>{
      if(response){    
        this.articles = response;
      }
    })
  }
}
