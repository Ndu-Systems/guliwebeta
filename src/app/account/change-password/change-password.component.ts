import { UserAccountService } from './../user-account.service';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public confirmpassword: String;
  public oldpassword: String;
  public newpassword: String;
  public user: User;
  message: any;
  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private userAccountService :UserAccountService
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    console.log(this.user)

  }

  Abort() {
    if (this.user.Role == "Admin") {
      this.router.navigate(["admin-dashboard"]);
    }
    else if (this.user.Role == "Customer") {
      this.router.navigate(["user-dashboard"]);
    }
    else {

      this.router.navigate(["login"]);
    }
  }
  isValid : Boolean = false;
  Save() {

    this.userAccountService.loginUser(this.user.Email, this.oldpassword).subscribe(response => {
      if(response){
        this.isValid = true;
      } 
      if (this.isValid) {
        if (this.newpassword == null || this.newpassword == "" ||
          this.confirmpassword == "" || this.confirmpassword == null) {
  
          this.message = "fields to be updated cannot be empty";
          this.oldpassword = null;
          this.newpassword = null;
          this.confirmpassword = null;
          return false;
        }
        // if (this.newpassword.length < 6) {
  
        //   this.message = "Password lenght can not be less than 6 characters";
        //   this.newpassword = null;
        //   this.oldpassword = null;
        //   this.confirmpassword = null;
        //   return false;
        // }
        if (this.newpassword != this.confirmpassword) {
  
          this.message = "Passwords do not Match, please check and continue";
          this.newpassword = null;
          this.oldpassword = null;
          this.confirmpassword = null;
          return false;
        }  
        var data = {
          Password: this.newpassword,
          Email: this.user.Email
        }
        this.userDataService.updatePassword(data).subscribe(response => {
          if (response == 1) {
            alert("Account Details Updated Successfully - Click Ok to proceed");
            this.user.Password = this.newpassword;
            this.userDataService.saveUser(this.user);
            if (this.user.Role == "Admin") {
              this.router.navigate(["admin-dashboard"]);
            }
            else if (this.user.Role == "Customer") {
              this.router.navigate(["user-dashboard"]);
            }
            else {
  
              this.router.navigate(["login"]);
            }
          }
          else {
            this.message = "Error Please Try Again";
          }
        })
  
      } else {
        this.message = "Please enter correct Credentials and Continue";
        this.newpassword = null;
        this.oldpassword = null;
        this.confirmpassword = null;
      }    
    })
    
  }

}
