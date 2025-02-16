import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { GetEmptyResponse, IQuery } from '../../../shared/shared.model';
import { VotingResultItem } from '../voting-search.model';

@Component({
  selector: 'app-voting-search-list',
  standalone: true,
  imports: [CommonModule, CardModule, MessageModule, PanelModule, TableModule],
  templateUrl: './voting-search-list.component.html',
  styleUrl: './voting-search-list.component.scss',
})
export class VotingSearchListComponent {
  @Input() response;
  @Input() query;
  @Input() loading: boolean = false;
  @Output() onPage: EventEmitter<IQuery> = new EventEmitter();

  constructor() {
    this.response = GetEmptyResponse<VotingResultItem>();
    this.query = {
      page: 0,
      pageSize: 25,
    };
  }

  getFirst() {
    return this.query.page * this.query.pageSize;
  }

  toItem(item: VotingResultItem): VotingResultItem {
    return item;
  }

  loadData(event: any, isButtonCliecked: boolean) {
    this.query.page = event.first / event.rows;
    this.query.pageSize = event.rows;
    this.onPage.emit(this.query);
  }

  pageChange(event: any) {}
}
