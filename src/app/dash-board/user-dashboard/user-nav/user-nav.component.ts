import { UserDataService } from './../../../shared/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

   
 user: any
  username:any
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    this.username = this.user.Email;
   }
}
