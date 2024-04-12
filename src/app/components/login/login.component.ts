import { Component } from '@angular/core';
import { AuthService } from '../../services/login/login.service.spec';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {


  visibility: string = 'visibility_off';

  senha!: string;
  email!: string;
  errorEmail: string = '';



  constructor(private authService: AuthService, private router: Router) { }


  togglePasswordVisibility(input: HTMLInputElement): void{
    if (input.type === 'text') {
      input.type = 'password';
      this.visibility = 'visibility_off'
    } else {
      input.type = 'text';
      this.visibility = 'visibility'
    }
  }

  fazerLogin() {
    this.errorEmail = '';
    this.authService.login(this.email, this.senha).subscribe(
  
      (response) => {
        console.log(response); // Aqui você pode lidar com a resposta da sua API Node.js
        console.log("logou");
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error(error); // Aqui você pode lidar com erros, como exibir uma mensagem de erro para o usuário
        console.log("não logou");
        console.log(this.email, this.senha);
        this.errorEmail = 'E-mail ou senha inválido!';
      }
    );
  }
}
