import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {
  private apiUrl = 'http://localhost:4200/assets/faturamento_mensal.json'; 

  constructor(private http: HttpClient) { }

  getFaturamentoMensalBruto(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.faturamento_mensal_bruto.slice([0, 13]))
    );
  }
}
