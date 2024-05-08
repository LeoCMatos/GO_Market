import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:4200/assets/categoria.json'; // Substitua pela URL do seu JSON ou caminho relativo ao arquivo

  constructor(private http: HttpClient) { }

  getCategoriaMaisVendida(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.categoria_mais_vendida.slice([0, 2]))
    );
  }
}
