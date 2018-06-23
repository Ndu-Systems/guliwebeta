import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewArticleService {
  API_PATH = API_URL;
  constructor(private httpClient: HttpClient) { }
   viewArticle(ArticleId : number): Observable<any>{
     return this.httpClient.get<any>(
      `${this.API_PATH}/Article/GetArticleById.php?id=${ArticleId}`
     );
   }
}
