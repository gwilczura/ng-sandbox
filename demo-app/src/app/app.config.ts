import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { AppConfigService } from './core/config/app-config.service';
import Aura from '@primeng/themes/aura';

export async function initConfig(appConfig: AppConfigService) {
  await appConfig.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => initConfig(inject(AppConfigService))),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: Aura } }),
  ],
};
