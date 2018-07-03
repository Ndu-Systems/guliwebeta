import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.userDataService.saveUser(null);
    this.router.navigate(['login']);
  }

}
