import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustoProServiceService {

  baseUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }

  getOneCustomer(id:number): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/c/getCustomer/${id}`)
  }
}
