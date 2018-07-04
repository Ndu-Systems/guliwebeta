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
    private selectService: SelectService
  ) { }

  ngOnInit() {
    this.articles$ = this.selectService.select("article order by ArticleId desc");
  }

}
