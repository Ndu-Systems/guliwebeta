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

  addArticle(model): Observable<any>{
    return this.HttpClient.post(`${this.API_PATH}/Article/AddArticle.php`,model);
  }

 
  uploadFile(file:File):Observable<any>{
    let formData  = new FormData();
    formData.append('file', file);
    formData.append('name', file.name)
     return this.HttpClient.post<any>(`${this.API_PATH}/Article/upload.php`,
      formData
    );
}
}
