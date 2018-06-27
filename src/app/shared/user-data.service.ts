import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

        user:any;
        url = API_URL;
        constructor(private httpClient: HttpClient ) { }
            saveUser(user:any):Observable<any>{
                return  this.user = user;
            }
            getUser(): any{
                return this.user;            
            }
            updatePassword(data): Observable<any>{
                return this.httpClient.post(`${this.url}/Account/PasswordReset.php`,data); 
              }


}
