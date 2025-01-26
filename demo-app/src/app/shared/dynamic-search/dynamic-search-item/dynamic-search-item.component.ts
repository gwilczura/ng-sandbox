import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ISearchFilterItem, SearchItemType } from '../dynamic-search.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-dynamic-search-item',
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
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './dynamic-search-item.component.html',
  styleUrl: './dynamic-search-item.component.scss',
})
export class DynamicSearchItemComponent {
  @Input() searchItem!: ISearchFilterItem;
  @Input() form!: FormGroup;
  @Output() onRemoveSearchItem: EventEmitter<ISearchFilterItem> =
    new EventEmitter();
  @ViewChild('searchItemInput') searchItemInput: any;
  public searchItemType = SearchItemType;

  get isValid() {
    return this.form.controls[this.searchItem.id].valid;
  }

  clearData(): void {
    this.form.get(this.searchItem.id)?.reset();
  }
  removeSearchItem(): void {
    console.log(this.searchItem);
    this.onRemoveSearchItem.emit(this.searchItem);
  }
}
