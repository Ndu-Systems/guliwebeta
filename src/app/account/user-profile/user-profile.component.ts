import { UserDataService } from './../../shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../user-account.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User
  isValid : boolean
  message: any
  constructor(
              private userDataService : UserDataService,
              private router: Router,
              private userAccountService: UserAccountService
            ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
  }
  update(user) {

    if (user.FirstName === undefined || user.Surname === "" || user.FirstName === "" || user.Surname === undefined) {
      this.message = "Personal Information is a Required Field";
      return false;
    }

    let data = {
      FirstName: user.FirstName,
      Surname: user.Surname,
      Email: user.Email
    };

    this.userAccountService.updateUser(data).subscribe(response => {
      if (response == 1) {
        alert("Details Updated Accordingly");
        if(user.Role == "Admin"){
          this.router.navigate(["admin-dashboard"]);
        }
        else if(user.Role == "Customer"){
          this.router.navigate(["user-dashboard"]);
        }
        else{
          
          this.router.navigate(["login"]);
        }
      }
    });
  }
}
