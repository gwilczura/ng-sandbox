import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppConfigService } from './core/config/app-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = '';

  constructor(private appConfigService: AppConfigService) {
    this.title = appConfigService.getConfig().title ?? 'Unknown Title';
  }
}
