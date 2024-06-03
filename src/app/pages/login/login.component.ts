import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService) {}

  authData: { email: string; password: string } = {
    email: '',
    password: '',
  };

  login() {
    this.authSvc.login();
  }
}
