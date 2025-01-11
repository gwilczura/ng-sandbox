import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppConfigService } from './core/config/app-config.service';
import { MainMenuComponent } from './core/layout/main-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '';

  constructor(private appConfigService: AppConfigService) {
    this.title = appConfigService.getConfig().title ?? 'Unknown Title';
  }
}
