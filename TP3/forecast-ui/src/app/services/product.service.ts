import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<any[]>(`${this.productsUrl}/forecast/all-products`);
  }
  async forecast(){
    const results = Array.from({length: 12}).map<Number> (
      (_, i) => {
        return Math.random() * 500
      }
  )
  return Promise.all(results);
  }


  login(name:string): Observable<any>{
    return this.http.post<any[]>(`${this.productsUrl}/auth/login`, name);
  }
  register(crdentials:any): Observable<any>{
    return this.http.post<any[]>(`${this.productsUrl}/auth/register`, crdentials);
  }

}
