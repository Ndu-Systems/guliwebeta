import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserDataService } from '../../../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  user: User
  constructor(
              private userDataService : UserDataService,
              private router: Router 
            ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
  }


}
