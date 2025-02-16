import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { GetEmptyResponse, IQuery, IResponse } from '../../shared/shared.model';
import { Item } from './session.model';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFilterComponent } from './session-filter/session-filter.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [SessionListComponent, SessionFilterComponent],
  template: `<div>
    <app-session-filter
      (onSearch)="onSearchHandler($event)"
      [form]="formForFilter"
      [loading]="loading"
    />
    <app-session-list
      (onPage)="onPageHandler($event)"
      [query]="query"
      [response]="response"
      [loading]="loading"
    />
  </div>`,
})
export class SessionComponent implements OnInit {
  response: IResponse<Item>;
  data: Item[] = [];
  pageSize: number = 25;
  query: IQuery;
  loading: boolean = false;
  formForFilter: FormGroup = new FormGroup([]);
  constructor(private sessionService: SessionService) {
    this.response = GetEmptyResponse<Item>();
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
      (await this.sessionService.getItemsAsync(searchParams)) ?? [];
    this.loading = false;
  }
}
