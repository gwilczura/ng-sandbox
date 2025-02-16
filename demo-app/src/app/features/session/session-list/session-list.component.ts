import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../session.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { GetEmptyResponse, IQuery } from '../../../shared/shared.model';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule, CardModule, MessageModule, PanelModule, TableModule],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
})
export class SessionListComponent {
  @Input() response;
  @Input() query;
  @Input() loading: boolean = false;
  @Output() onPage: EventEmitter<IQuery> = new EventEmitter();

  constructor() {
    this.response = GetEmptyResponse<Item>();
    this.query = {
      page: 0,
      pageSize: 25,
    };
  }
  getFirst() {
    return this.query.page * this.query.pageSize;
  }

  loadData(event: any, isButtonCliecked: boolean) {
    this.query.page = event.first / event.rows;
    this.query.pageSize = event.rows;
    this.onPage.emit(this.query);
  }

  pageChange(event: any) {}
}
