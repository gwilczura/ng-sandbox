import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicSearchComponent } from '../../../shared/dynamic-search/dynamic-search.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ISearchFilterItem } from '../../../shared/dynamic-search/dynamic-search.model';
import { defaultSearchItems } from '../voting-search.model';

@Component({
  selector: 'app-voting-search-filter',
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
  templateUrl: './voting-search-filter.component.html',
  styleUrl: './voting-search-filter.component.scss',
})
export class VotingSearchFilterComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup([]);
  @Input() loading: boolean = false;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  searchItems: ISearchFilterItem[] = defaultSearchItems;

  ngOnInit() {}

  onSearchHandler(data: any) {
    this.onSearch.emit(data);
  }
}
