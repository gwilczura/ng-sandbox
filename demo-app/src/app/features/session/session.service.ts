import { Injectable } from '@angular/core';
import { AppConfigService } from '../../core/config/app-config.service';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  url = '';

  constructor(private appConfigService: AppConfigService) {
    this.url = appConfigService.getConfig().serverUrl ?? '';
  }

  async getSessionsAsync(): Promise<Session[] | undefined> {
    const requestUrl = `${this.url}/sessions`;
    const data = await fetch(requestUrl);

    var result = (await data.json()) as Session[];
    return result;
  }
}
