import { UserDataService } from './../../shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectService } from '../../shared/select.service';

@Component({
  selector: 'app-list-purchases',
  templateUrl: './list-purchases.component.html',
  styleUrls: ['./list-purchases.component.css']
})
export class ListPurchasesComponent implements OnInit {

  articles$: Observable<any>;
  user: any;
  id: any;
  constructor(
    private selectService: SelectService,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    debugger
    this.user = this.userDataService.getUser();
    this.id = this.user.UserId;
    this.articles$ = this.selectService.select("user_article ua INNER JOIN article a on a.ArticleId = ua.ArticleId INNER JOIN users u on u.UserId = ua.UserId WHERE ua.UserId = " + this.id + " AND ua.Status = 'Active' ");
  }
  getColor(state) { 
    switch (state) {
      case 'Pending':
        return 'orange';
      case 'Download':
        return 'green';
      case 'Archived':
        return 'gray';
    }
  }

}
