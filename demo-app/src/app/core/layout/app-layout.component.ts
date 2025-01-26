import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule,
    PanelModule,
    MessageModule,
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [{ label: 'Page Header' }];
  }
}
