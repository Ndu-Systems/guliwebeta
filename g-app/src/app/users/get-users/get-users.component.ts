import { Observable } from 'rxjs';
import { SelectService } from './../../shared/select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  
  users$ : Observable<any>;

  constructor(
    private selectService : SelectService
  ) { }

  ngOnInit() {
         this.users$ = this.selectService.select(`users ORDER BY UserId`); 
       } 
}
