import { Injectable } from '@angular/core';
import { Session } from './session.model';
import { HttpService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpService: HttpService) {}

  async getSessionsAsync(): Promise<Session[] | undefined> {
    return await this.httpService.getAsync<Session>('/sessions');
  }
}
