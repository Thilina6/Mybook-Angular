import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) {}

  getRandomData(data:any):Observable<any>{
    const url=environment.shortcutUrl+'';
    return this.httpClient.get(url);
  }
}
