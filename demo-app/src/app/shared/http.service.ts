import { Injectable } from '@angular/core';
import { AppConfigService } from '../core/config/app-config.service';
import { IQuery, IResponse } from './shared.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = '';

  constructor(private appConfigService: AppConfigService) {
    this.url = appConfigService.getConfig().serverUrl ?? '';
  }

  async getResponseAsync<T>(
    enpoint: string,
    params: IQuery
  ): Promise<IResponse<T>> {
    const validParams = Object.entries(params).filter(
      (p) => !(p[1] === undefined || p[1] === null || p[1] === '')
    );
    const query = new URLSearchParams(validParams);
    const queryString = query.toString();

    const requestUrl = `${this.url}${enpoint}?${queryString}`;
    const data = await fetch(requestUrl);

    var result = (await data.json()) as IResponse<T>;
    return result;
  }

  async getAsync<T>(enpoint: string): Promise<T[] | undefined> {
    const requestUrl = `${this.url}${enpoint}`;
    const data = await fetch(requestUrl);

    var result = (await data.json()) as T[];
    return result;
  }
}
