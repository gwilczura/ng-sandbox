import { Injectable } from '@angular/core';
import { Item, ServerItem, Session } from './session.model';
import { HttpService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpService: HttpService) {}

  async getSessionsAsync(): Promise<Session[] | undefined> {
    return await this.httpService.getAsync<Session>('/sessions');
  }
  async getItemsAsync(): Promise<Item[] | undefined> {
    // sessions
    var x = await this.httpService.getAsync<ServerItem>('/items');
    return x?.map(
      (a) =>
        ({
          category: a.Category,
          date: a.Date,
          description: a.Description,
          groupName: a.GroupName,
          hour: a.Hour,
          name: a.Name,
          person: a.Person,
          vote: a.Vote,
        } as Item)
    );
  }
}
