import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LucroService {

  constructor(private http: HttpClient) {
    }

    private apiUrl = 'http://localhost:4200/assets/lucro.json'; 


    getLucroMensal(): Observable<any> {
      return this.http.get<any>(this.apiUrl).pipe(
        map(response => response.lucro_liquido.slice([0, 13]))
      );
    }
}
