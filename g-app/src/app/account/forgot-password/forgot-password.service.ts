import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  API_PATH = API_URL;
  constructor(private httpClient:HttpClient ) { }

  forgotPassword(Email:any):Observable<any>{
       return this.httpClient.get<any>(`${this.API_PATH}/Account/ForgotEmail.php?Email=${Email}`);
  }
}
