import { Injectable } from '@angular/core';
import { Item, Session } from './session.model';
import { HttpService } from '../../shared/http.service';
import { IQuery, IResponse } from '../../shared/shared.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpService: HttpService) {}

  async getSessionsAsync(): Promise<Session[] | undefined> {
    return await this.httpService.getAsync<Session>('/sessions');
  }
  async getItemsAsync(params: IQuery): Promise<IResponse<Item>> {
    // sessions
    const validParams = Object.entries(params).filter(
      (p) => !(p[1] === undefined || p[1] === null || p[1] === '')
    );
    const query = new URLSearchParams(validParams);
    const queryString = query.toString();
    var x = await this.httpService.getResponseAsync<Item>(
      `/votingdata?${queryString}`
    );
    return x;
  }
}
