import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchItemComponent } from './dynamic-search-item.component';
import { SearchItemType } from '../dynamic-search.model';
import { FormControl, FormGroup } from '@angular/forms';

describe('DynamicSearchItemComponent', () => {
  let component: DynamicSearchItemComponent;
  let fixture: ComponentFixture<DynamicSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSearchItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicSearchItemComponent);
    component = fixture.componentInstance;
    component.searchItem = {
      type: SearchItemType.TextBox,
      id: 'test',
      name: 'test',
      label: 'test',
      isActive: true,
      isDefault: true,
    };
    const formGroup: FormGroup = new FormGroup([]);
    formGroup.addControl(component.searchItem.id, new FormControl(''));
    component.form = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
