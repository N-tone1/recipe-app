import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})




export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const userData = await this.authService.login(this.email, this.password);
      console.log('Login successful:', userData);
      this.router.navigate(['/dashboard']); // Redirect after login
    } catch (error) {
      alert('Login failed! Please check your credentials.');
    }
  }
}
