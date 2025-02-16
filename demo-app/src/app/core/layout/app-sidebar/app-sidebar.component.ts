import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-app-sidebar',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss',
})
export class AppSidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Voting',
        items: [
          {
            label: 'Home',
            routerLink: '/',
            icon: 'pi pi-search',
          },
          {
            label: 'Sessions',
            routerLink: 'session',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            routerLink: 'voting-search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
