import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionListComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
