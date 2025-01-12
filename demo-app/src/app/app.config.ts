import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { AppConfigService } from './core/config/app-config.service';
import Aura from '@primeng/themes/aura';

export async function initConfig(appConfigService: AppConfigService) {
  await appConfigService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => initConfig(inject(AppConfigService))),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: Aura } }),
  ],
};
