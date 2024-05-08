import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importe o Router aqui
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login`, { email: email, senha: senha }).pipe(
      map(response => {
        return response.usuario.usu_nome; 
      })
    );
  }
}
