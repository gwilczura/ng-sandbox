import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingSearchComponent } from './voting-search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('VotingSearchComponent', () => {
  let component: VotingSearchComponent;
  let fixture: ComponentFixture<VotingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingSearchComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
