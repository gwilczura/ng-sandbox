import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app-layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: AppLayoutComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
