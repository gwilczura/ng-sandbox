import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchItemComponent } from './dynamic-search-item.component';

describe('DynamicSearchItemComponent', () => {
  let component: DynamicSearchItemComponent;
  let fixture: ComponentFixture<DynamicSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSearchItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
