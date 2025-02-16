import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AppConfigService } from '../../config/app-config.service';

@Component({
  selector: 'app-app-footer',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent implements OnInit {
  versionText: string = '';
  items: MenuItem[] | undefined;

  constructor(private appConfigService: AppConfigService) {
    this.versionText = `${
      this.appConfigService.getConfig().version
    } | ${this.appConfigService.gerServerVersion()}`;
  }

  ngOnInit(): void {
    this.items = [{ label: 'ver:' }, { label: this.versionText }];
  }
}
