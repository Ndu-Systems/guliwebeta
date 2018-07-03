import { UserAccountService } from './../user-account.service';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  message: string;
  token: any;
  user: User;
  password:String;
  passwordConfirm:String;
  email:String;

  constructor(
    private location: LocationStrategy,
    private selectService: SelectService,
    private userDataService:UserDataService,
    private userAccountService: UserAccountService,
    private router:Router
  ) { }

  ngOnInit() {
    let baseUrlMain: string = (<any>this.location)._platformLocation.location
      .href;
    this.token = baseUrlMain.substring(baseUrlMain.indexOf("=") + 1);
    this.getUserByToken();
  }

  getUserByToken() {    
    this.selectService
      .select(`users WHERE token = '${this.token}'`)
      .subscribe(user => {
        let check:any[]= user;
          if(check.length ==0){
            alert("invalid link");
                this.router.navigate(['/']);
          }
        this.user = user[0];    
        console.log(this.user)
      });
  }

  Save(){
    if(this.email !== this.user.Email){
      this.message = "Please enter the valid email address";
      return false;
    }
    if(!this.password){
      this.message = "Please enter password";
      return false;
    }
    // if(this.password.length <6 ){
    //   this.message = "You password must be atleast 6 characters";
    //   return false;
    // }
    if(this.password != this.passwordConfirm){
      this.message = "Passwords do not match";
      return false;
    } 
    this.userAccountService.loginUser(this.email,this.password)
          .subscribe(response => {
            if(response!== 0){
              this.message = "You cannot use the same password as your previous";
              return false;
            }
            else{      
              let data = {
                Password: this.password,
                Email:this.email
              }       
              this.userDataService.updatePassword(data)
                  .subscribe(response => {
                    if(parseInt(response) === 1){
                      this.user = null;
                      alert("Password was updated, click Ok to login")
                      this.router.navigate(['/login']);
                    }
                  })
        }
    }) 

  }

}
