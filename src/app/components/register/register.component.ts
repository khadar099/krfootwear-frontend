import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      res => {
        alert('Registration successful!');
        console.log(res);
      },
      err => {
        alert('Registration failed');
        console.error(err);
      }
    );
  }
}
