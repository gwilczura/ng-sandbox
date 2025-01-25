import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicSearchItemComponent } from './dynamic-search-item/dynamic-search-item.component';
import { ISearchFilterItem } from './dynamic-search.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-dynamic-search',
  standalone: true,
  imports: [
    CommonModule,
    DynamicSearchItemComponent,
    ReactiveFormsModule,
    FloatLabelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
  ],
  templateUrl: './dynamic-search.component.html',
  styleUrl: './dynamic-search.component.scss',
})
export class DynamicSearchComponent implements OnInit {
  @Input() searchItems: ISearchFilterItem[] = [];
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.toFormGroup(this.searchItems);
  }

  onSubmit() {
    console.log(JSON.stringify(this.form.getRawValue()));
  }

  toFormGroup(items: ISearchFilterItem[]) {
    const group: any = {};
    items.forEach((item) => {
      group[item.id] = new FormControl('');
    });
    return new FormGroup(group);
  }
}
