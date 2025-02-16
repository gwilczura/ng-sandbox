import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { IQuery, IResponse } from '../../shared/shared.model';
import { VotingResultItem } from './voting-search.model';

@Injectable({
  providedIn: 'root',
})
export class VotingSearchService {
  constructor(private httpService: HttpService) {}

  async getItemsAsync(params: IQuery): Promise<IResponse<VotingResultItem>> {
    var x = await this.httpService.getResponseAsync<VotingResultItem>(
      `/votingdata`,
      params
    );
    return x;
  }
}
