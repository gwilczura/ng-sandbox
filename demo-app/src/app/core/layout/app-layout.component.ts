import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {}
