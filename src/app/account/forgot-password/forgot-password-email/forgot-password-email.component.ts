import { ForgotPasswordService } from './../forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../../shared/email.service';
import { SelectService } from '../../../shared/select.service';
import { WEB_HOST } from '../../../shared/config';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.css']
})
export class ForgotPasswordEmailComponent implements OnInit {
  isValid: boolean;
  email : any;
  message: any;
  token : any;
  name: any;

  constructor(
    private router : Router,
    private forgotPasswordService : ForgotPasswordService,
    private emailService: EmailService,
    private selectService: SelectService
  ) { }

  ngOnInit() {
  }
  ResetPassword()
  {
    this.message = undefined;
    if(this.email == undefined || this.email ==""){
      this.message = "please supply required information"
      return false;
    }
    this.forgotPasswordService.forgotPassword(this.email)
          .subscribe(response => {
            if(response==1){
              this.selectService.select("users where Email ='"+this.email+"'")
                    .subscribe(response =>{
                      this.token = response[0].token;
                      this.name = response[0].FirstName;

                      let email = {
                        from: 'noreply@guliwe-publication.net',
                        email: this.email,
                        subject: 'Forgot Password - Reset',
                        message: `Hi ${this.name} ! <br/>
                                       <h2>Woooh! Forgot Your Password?</h2> <br/>
                                       Happens to the Best of Us!<br/>
                                       Please click link below to reset password<br/>
                                       <table>
                                       <tr>
                                       <td><a href=${WEB_HOST}/#/reset-password?tokken=${this.token}>Reset Password</a> </td>                    
                                       <td> </td>
                                       </tr>                                                  
                                       </table><br/>
                                       We hope you find this a Good Read... Visit us Again
                                       `
                      }

                      this.emailService.sendEmail(email)
                            .subscribe(response => {
                              if(response == 1){
                                alert("Email Sent");
                                this.router.navigate(['/']);
                              }
                              else{
                                alert(response);
                              }
                            })
              })            
            }
            else {
              this.message = "Invalid Email Address";
            }
          })
    

  }
}
