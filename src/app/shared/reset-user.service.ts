import { Injectable } from '@angular/core';
import { API_URL } from './config';
import { UserDataService } from './user-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetUserService {

  API_PATH = API_URL;
  constructor(private UserDataService:UserDataService,private httpClient:HttpClient) { }
  
  resetUser(email:string, password:string):Observable<any>{
    return this.httpClient.get<any>(`${this.API_PATH}/Account/SignIn.php?Email=${email}&Password=${password}`);
          }


}
