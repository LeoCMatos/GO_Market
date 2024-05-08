import { Component } from '@angular/core';
import { AuthService } from '../../services/login.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private globalService: GlobalService) { }

  visibility: string = 'visibility_off';

  senha!: string;
  email!: string;
  errorEmail: string = '';

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
        this.globalService.setGlobalName(response);
        this.router.navigate(['/home/dashboard']);
        
      },
      (error) => {
        console.log(this.email, this.senha);
        this.errorEmail = 'E-mail ou senha inválido!';
      }
    );
  }
}
