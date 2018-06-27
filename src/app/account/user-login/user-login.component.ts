import { UserAccountService } from './../user-account.service';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  Email: any = 'user@mail.com'
  Password: any = 'pass'
  message: any
  isValid: Boolean
  constructor(
    private userAccountService: UserAccountService,
    private userDataService:UserDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  Login(){
    this.message = null;
    this.isValid = true;
    if(this.Email == undefined || this.Email == ""){
      this.message = "All Feilds Are Required";
    }
    if(this.Password == undefined || this.Password == ""){
      this.message = "All Feilds Are Required";
    }
    if(this.isValid){
      this.userAccountService.loginUser(this.Email,this.Password)
      .subscribe((response)=>{
        let user = response.data[0];
        if(user.Email!== undefined){           
            this.userDataService.saveUser(user);
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
        else{
          this.message = "Invalid Email/Password"
        }
      });
    }
  
  }

}
