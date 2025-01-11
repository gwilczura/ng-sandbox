import { Injectable } from '@angular/core';
import { AppConfig } from '../../shared/config/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: AppConfig = {};

  constructor() {}

  async loadConfig(): Promise<void> {
    const data = await fetch('/app.config.json');
    console.log(data);
    this.config = await data.json();
    console.log(this.config);
  }

  getConfig(): AppConfig {
    return this.config;
  }
}
