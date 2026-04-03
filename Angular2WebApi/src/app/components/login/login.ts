import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { LoginModelModule } from '../../models/login-model/login-model-module';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.html'
})
export class LoginFormComponent {
  private loginService = inject(AuthService);
  private router = inject(Router);

  user = new LoginModelModule();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loginService.login(this.user).subscribe({
        next: (response: any) => {
          this.loginService.saveToken(response.Token);
          this.router.navigate(['/studentlist']);
        },
        error: (err: any) => {
          console.error(err);
          alert('Login Failed');
        }
      });
    }
  }
}