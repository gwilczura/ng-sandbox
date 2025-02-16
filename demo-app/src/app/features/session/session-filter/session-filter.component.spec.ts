import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFilterComponent } from './session-filter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('SessionFilterComponent', () => {
  let component: SessionFilterComponent;
  let fixture: ComponentFixture<SessionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionFilterComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
