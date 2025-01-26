import { Component, Input, OnInit } from '@angular/core';
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
  ],
  templateUrl: './dynamic-search.component.html',
  styleUrl: './dynamic-search.component.scss',
})
export class DynamicSearchComponent implements OnInit {
  @Input() searchItems: ISearchFilterItem[] = [];
  activeItems: ISearchFilterItem[] = [];
  availableItems: ISearchFilterItem[] = [];
  selectedItem: ISearchFilterItem | undefined;
  form!: FormGroup;

  ngOnInit(): void {
    this.setup();
  }

  public addSearchFilerItem() {
    if (this.selectedItem) {
      this.selectedItem.isActive = true;
      this.setup();
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.form.getRawValue()));
  }

  setup(): void {
    this.activeItems = this.searchItems.filter((si) => si.isActive === true);
    this.availableItems = this.searchItems
      .filter((si) => si.isActive === false)
      .sort((a, b) => a.label.localeCompare(b.label));
    this.form = this.toFormGroup(this.activeItems);
  }

  toFormGroup(items: ISearchFilterItem[]) {
    const group: any = {};
    items.forEach((item) => {
      group[item.id] = new FormControl('');
    });
    return new FormGroup(group);
  }
}
