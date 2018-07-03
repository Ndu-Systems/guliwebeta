import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direct-deposit',
  templateUrl: './direct-deposit.component.html',
  styleUrls: ['./direct-deposit.component.css']
})
export class DirectDepositComponent implements OnInit {
   firstName: any
   lastName:any
   emailAddress:any
   user : User
  constructor(
    private userDataService: UserDataService
    ,private router : Router
  ) { }

  ngOnInit() {
    this.GetUser();
  }
  GetUser(): any {
    this.user = this.userDataService.getUser();
    if(this.user){
      this.emailAddress = this.user.Email;
      this.firstName = this.user.FirstName;
      this.lastName = this.user.Surname;
    }
    else{
      this.router.navigate(['Un-Authorized']);
    }
  }
}
