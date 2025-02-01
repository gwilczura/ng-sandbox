import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicSearchItemComponent } from './dynamic-search-item/dynamic-search-item.component';
import { ISearchFilterItem } from './dynamic-search.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-dynamic-search',
  standalone: true,
  imports: [
    CommonModule,
    DynamicSearchItemComponent,
    ReactiveFormsModule,
    FloatLabelModule,
    ToolbarModule,
    FormsModule,
    ButtonModule,
    SelectModule,
    SplitButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FieldsetModule,
    MessageModule,
  ],
  templateUrl: './dynamic-search.component.html',
  styleUrl: './dynamic-search.component.scss',
})
export class DynamicSearchComponent implements OnInit {
  @Input() searchItems: ISearchFilterItem[] = [];
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  activeItems: ISearchFilterItem[] = [];
  availableItems: ISearchFilterItem[] = [];
  selectedItem: ISearchFilterItem | undefined;
  isCollapsed: boolean = false;
  form: FormGroup = new FormGroup([]);
  formControls: { [key: string]: FormControl } = {};

  ngOnInit(): void {
    this.initFormControls();
    this.setup();
  }

  addSearchFilerItem() {
    if (this.selectedItem) {
      this.selectedItem.isActive = true;
      this.setup(this.selectedItem);
    }
  }

  resetFilters() {
    this.searchItems.forEach((item) => {
      item.isActive = item.isDefault;
    });
    this.setup();
  }

  onSubmit() {
    this.onSearch.emit(this.form.getRawValue());
  }

  onRemoveSearchItem(item: ISearchFilterItem) {
    item.isActive = false;
    this.setup(item);
  }

  onSearchFieldsetChanged(value: boolean) {
    this.isCollapsed = value;
  }

  setup(item?: ISearchFilterItem): void {
    if (item) {
      if (item.isActive) {
        this.activeItems = this.activeItems.concat([item]);
      } else {
        this.activeItems = this.activeItems.filter(
          (si) => si.isActive === true
        );
      }
    } else {
      this.activeItems = this.searchItems.filter((si) => si.isActive === true);
    }
    this.availableItems = this.searchItems
      .filter((si) => si.isActive === false)
      .sort((a, b) => a.label.localeCompare(b.label));
    this.setupForm();
  }

  setupForm() {
    this.searchItems.forEach((item) => {
      if (item.isActive) {
        this.form.addControl(item.id, this.formControls[item.id]);
      } else {
        this.form.removeControl(item.id);
      }
    });
  }

  initFormControls() {
    this.searchItems.forEach((item) => {
      this.formControls[item.id] = new FormControl('');
    });
  }
}
