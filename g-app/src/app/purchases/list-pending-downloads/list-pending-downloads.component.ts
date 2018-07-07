import { Observable } from 'rxjs';
import { SelectService } from './../../shared/select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pending-downloads',
  templateUrl: './list-pending-downloads.component.html',
  styleUrls: ['./list-pending-downloads.component.css']
})
export class ListPendingDownloadsComponent implements OnInit {

  articles$ : Observable<any>;
  constructor(
    private selectService : SelectService
  ) { }

  ngOnInit() {
      this.articles$ = this.selectService.select("user_article ua INNER JOIN article a on a.ArticleId = ua.ArticleId INNER JOIN users u on u.UserId = ua.UserId WHERE ua.State = 'Pending' AND ua.Status = 'Active'");
    }

 
}
