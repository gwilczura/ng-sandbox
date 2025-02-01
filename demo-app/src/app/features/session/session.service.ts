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
    var x = await this.httpService.getResponseAsync<Item>(
      `/votingdata`,
      params
    );
    return x;
  }
}
