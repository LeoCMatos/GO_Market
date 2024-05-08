import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosMaisVendidosService {

  private apiUrl = 'http://localhost:4200/assets/produtos_mais_vendidos.json'; 


  constructor(private http: HttpClient) {
  }

  getProdutosMaisVendidos(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.produtos_mais_vendidos.slice([0, 4]))
    );
  }
}
