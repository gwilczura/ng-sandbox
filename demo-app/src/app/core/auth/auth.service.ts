import { Injectable } from '@angular/core';
import { AppConfigService } from '../config/app-config.service';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '';

  constructor(private appConfigService: AppConfigService) {
    this.url = appConfigService.getConfig().serverUrl ?? '';
    console.log('url: ', this.url);
  }

  async loginUser(
    username: string,
    password: string
  ): Promise<string | undefined> {
    const requestUrl = `${this.url}/users?username=${username}&password=${password}`;
    const data = await fetch(requestUrl);

    var result = (await data.json()) as User[];
    return result?.map((a) => a.username)?.find(() => true);
  }
}
