import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { GetEmptyResponse, IResponse } from '../../shared/shared.model';
import { Item } from './session.model';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFilterComponent } from './session-filter/session-filter.component';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [SessionListComponent, SessionFilterComponent],
  template: `<div>
    <app-session-filter (onSearch)="onSearchHandler($event)" />
    <app-session-list [response]="response" />
  </div>`,
})
export class SessionComponent implements OnInit {
  response: IResponse<Item>;
  data: Item[] = [];
  pageSize: number = 25;
  constructor(private sessionService: SessionService) {
    this.response = GetEmptyResponse<Item>();
  }

  async ngOnInit(): Promise<void> {
    this.response =
      (await this.sessionService.getItemsAsync({
        page: 0,
        pageSize: this.pageSize,
      })) ?? [];
  }

  async onSearchHandler(data: any) {
    const searchParams = {
      ...data,
      page: 0,
      pageSize: this.pageSize,
    };
    console.log(searchParams);
    this.response =
      (await this.sessionService.getItemsAsync(searchParams)) ?? [];
  }
}
