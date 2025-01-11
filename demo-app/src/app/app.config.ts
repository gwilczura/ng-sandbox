import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppConfigService } from './core/config/app-config.service';

export async function initConfig(appConfig: AppConfigService) {
  await appConfig.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => initConfig(inject(AppConfigService))),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
