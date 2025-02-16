import { Component, OnInit } from '@angular/core';
import { VotingSearchFilterComponent } from './voting-search-filter/voting-search-filter.component';
import { VotingSearchListComponent } from './voting-search-list/voting-search-list.component';
import { VotingSearchService } from './voting-search.service';
import { VotingResultItem } from './voting-search.model';
import { GetEmptyResponse, IQuery, IResponse } from '../../shared/shared.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voting-search',
  standalone: true,
  imports: [VotingSearchFilterComponent, VotingSearchListComponent],
  templateUrl: './voting-search.component.html',
  styleUrl: './voting-search.component.scss',
})
export class VotingSearchComponent implements OnInit {
  response: IResponse<VotingResultItem>;
  data: VotingResultItem[] = [];
  pageSize: number = 25;
  query: IQuery;
  loading: boolean = false;
  formForFilter: FormGroup = new FormGroup([]);
  constructor(private votingSearchService: VotingSearchService) {
    this.response = GetEmptyResponse<VotingResultItem>();
    this.query = {
      page: 0,
      pageSize: this.pageSize,
    };
  }

  async ngOnInit(): Promise<void> {}

  async onPageHandler(query: IQuery) {
    await this.loadData(query, this.formForFilter.getRawValue());
  }

  async onSearchHandler(filter: any) {
    this.query.page = 0;
    await this.loadData(this.query, filter);
  }

  async loadData(query: IQuery, filter: any) {
    this.loading = true;
    const searchParams = {
      ...filter,
      ...query,
    };
    this.response =
      (await this.votingSearchService.getItemsAsync(searchParams)) ?? [];
    this.loading = false;
  }
}
