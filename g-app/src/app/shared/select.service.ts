import { Injectable } from '@angular/core';
import { API_URL } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class SelectService {

    url: string = API_URL;
    constructor(private http:HttpClient) { }
    select(table):Observable<any>{
    return this.http.get<any>(`${this.url}/select.php?table=${table}`);
    }

}

