import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    const x = await this.authService.loginUser('greg', '1234');
    console.log('Hello', x);
  }
}
