import { Injectable } from '@angular/core';
import { AppConfig } from '../../shared/config/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: AppConfig = {};
  private serverVersion: string = '';

  constructor() {}

  async loadConfig(): Promise<void> {
    const data = await fetch('/app.config.json');
    this.config = await data.json();
  }

  async loadServerConfig(): Promise<void> {
    const data = await fetch(`${this.config.serverUrl}/version`);
    this.serverVersion = await data.text();
  }

  getConfig(): AppConfig {
    return this.config;
  }

  gerServerVersion(): string {
    return this.serverVersion;
  }
}
