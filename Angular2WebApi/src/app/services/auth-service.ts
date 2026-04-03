import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginModelModule } from '../models/login-model/login-model-module';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private url =  'https://localhost:7133/api/Account/login';

   login(loginModel: LoginModelModule) {
    return this.http.post(this.url, loginModel);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}