import { Routes } from '@angular/router';
import { TestComponent } from './features/counterparty/test/test.component';
import { LoginComponent } from './core/auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
];
