import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import {
  ISearchFilterItem,
  SearchItemType,
} from '../../../shared/dynamic-search/dynamic-search.model';
import { DynamicSearchComponent } from '../../../shared/dynamic-search/dynamic-search.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session-filter',
  standalone: true,
  imports: [
    CommonModule,
    FloatLabelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    DynamicSearchComponent,
  ],
  templateUrl: './session-filter.component.html',
  styleUrl: './session-filter.component.scss',
})
export class SessionFilterComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup([]);
  @Input() loading: boolean = false;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  searchItems: ISearchFilterItem[] = [
    {
      id: 'groupName',
      name: 'groupName',
      label: 'Group',
      type: SearchItemType.TextBox,
      isDefault: true,
      isActive: true,
    },
    {
      id: 'person',
      name: 'person',
      label: 'Person',
      type: SearchItemType.TextBox,
      isDefault: true,
      isActive: true,
    },
    {
      id: 'sessionName',
      name: 'sessionName',
      label: 'Session Name',
      type: SearchItemType.TextBox,
      isDefault: false,
      isActive: false,
    },
    {
      id: 'votingName',
      name: 'votingName',
      label: 'Voting Name',
      type: SearchItemType.TextBox,
      isDefault: false,
      isActive: false,
    },
    {
      id: 'vote',
      name: 'vote',
      label: 'Vote',
      type: SearchItemType.TextBox,
      isDefault: false,
      isActive: false,
    },
    {
      id: 'date',
      name: 'date',
      label: 'Date',
      type: SearchItemType.TextBox,
      isDefault: false,
      isActive: false,
    },
  ];

  ngOnInit() {}

  onSearchHandler(data: any) {
    this.onSearch.emit(data);
  }
}
