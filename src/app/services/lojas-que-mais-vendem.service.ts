import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LojasQueMaisVendemService {

  private apiUrl = 'http://localhost:4200/assets/lojas_mais_vendem.json'; 

  constructor(private http: HttpClient) { }

  getLojasMaisVendem(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.lojas_mais_vendem.slice([0, 6]))
    );
  }
}
