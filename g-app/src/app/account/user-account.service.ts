import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  API_PATH = API_URL;
    user : User;

    constructor(private httpClient:HttpClient) { }

    public loginUser(Email:String,Password:String): Observable<any>{
      return this.httpClient.get<any>(`${this.API_PATH}/Account/SignIn.php?Email=${Email}&Password=${Password}`);
   }

   registerUser(model):Observable<any>{
    console.log(model);
   return this.httpClient.post(`${this.API_PATH}/Account/signup.php`,model);
   }

   updateUser(data): Observable<any>{
     return  this.httpClient.post(`${this.API_PATH}/Account/updateuser.php`,data);
   }
}
