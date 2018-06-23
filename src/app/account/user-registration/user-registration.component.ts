import { ResetUserService } from './../../shared/reset-user.service';
import { UserDataService } from './../../shared/user-data.service';
import { UserAccountService } from './../user-account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  Email: any;
  Password: any;
  ConfirmPassword: any;
  FirstName: any;
  Surname: any;
  isValid: boolean;
  message: any;
  constructor(
    private userAccountService: UserAccountService,
    private router: Router,
    private userDataService: UserDataService,
    private resetUserService: ResetUserService
  ) { }

  ngOnInit() {
  }

  Register(){
    this.isValid = true;
    if (this.FirstName === undefined || this.Surname === "" || this.FirstName === "" || this.Surname === undefined) {
      this.isValid = false;
      this.message = "Personal Information is a Required Field";
      return;
    }
    if (this.Email === undefined || this.Email === "") {
      this.isValid = false;
      this.message = "Email Address is a Required Field";
      return;
    }
    if (this.Password === undefined || this.ConfirmPassword === undefined) {
      this.isValid = false;
      this.message = "Email Address is a Required Field";
      return;
    }
    if (this.Password !== this.ConfirmPassword) {
      this.isValid = false;
      this.message = "Password does not match!";
      return;
    }

    if(this.isValid){
      let data ={
        Email: this.Email,
        FirstName: this.FirstName,
        Surname: this.Surname,
        Password: this.Password
      };

      this.userAccountService.registerUser(data).subscribe(response =>{
        if(response>0){
        alert("user saved!");
        this.resetUserService.resetUser(data.Email,data.Password).subscribe((res)=>{
            this.userDataService.saveUser(res.data[0]);
            this.router.navigate(['User-Dashboard']);
        })     
      }
      else{
        this.message =response;
      }
    })
    }
  }

}
