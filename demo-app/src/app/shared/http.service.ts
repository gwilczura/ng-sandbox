import { Injectable } from '@angular/core';
import { AppConfigService } from '../core/config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = '';

  constructor(private appConfigService: AppConfigService) {
    this.url = appConfigService.getConfig().serverUrl ?? '';
  }

  async getAsync<T>(enpoint: string): Promise<T[] | undefined> {
    const requestUrl = `${this.url}${enpoint}`;
    const data = await fetch(requestUrl);

    var result = (await data.json()) as T[];
    return result;
  }
}
