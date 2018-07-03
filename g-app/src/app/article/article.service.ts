import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  API_PATH = API_URL;

  constructor(private HttpClient: HttpClient) { } 
  getAllArticles(): Observable<any>{
      return this.HttpClient.get<any>(
        `${this.API_PATH}/Article/GetAticles.php?`
      );
  }
}
