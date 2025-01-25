import { Component, OnInit } from '@angular/core';
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
  searchItems: ISearchFilterItem[] = [
    {
      id: 'name',
      name: 'name',
      label: 'Name:',
      type: SearchItemType.TextBox,
    },
    {
      id: 'other',
      name: 'other',
      label: 'Other:',
      type: SearchItemType.TextBox,
    },
  ];

  ngOnInit() {}
}
