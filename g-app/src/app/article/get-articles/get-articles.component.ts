import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../shared/select.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-articles',
  templateUrl: './get-articles.component.html',
  styleUrls: ['./get-articles.component.css']
})
export class GetArticlesComponent implements OnInit {

  articles$ : Observable<any>;
  constructor(
    private selectService: SelectService
  ) { }
  
  ngOnInit() {
    this.articles$ = this.selectService.select("article order by ArticleId desc");
  } 
}
