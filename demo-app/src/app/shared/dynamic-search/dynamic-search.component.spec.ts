import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchComponent } from './dynamic-search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DynamicSearchComponent', () => {
  let component: DynamicSearchComponent;
  let fixture: ComponentFixture<DynamicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSearchComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
