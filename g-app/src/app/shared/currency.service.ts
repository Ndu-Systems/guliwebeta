import { Injectable } from '@angular/core';
import { CONVERT_URL, ACCESS_Key, FORMAT_Key, CURRENCY_Key } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  API_PATH = CONVERT_URL;
  KEY = ACCESS_Key;
  FORMAT= FORMAT_Key;
  CURRENCY =CURRENCY_Key;
constructor(private http: HttpClient) { }

GetCurrency():Observable<any>{
  //this is the programmatical representatin of the ur below for currency conversion see ./config 
  return this.http.get<any>(`${this.API_PATH}access_key=${this.KEY}&${this.FORMAT}&currencies=${this.CURRENCY}`);
  //http://www.apilayer.net/api/live?access_key=4c8b5d5408a4d04921fe07bb2d491815&format=1&currencies=ZAR
}
}
