import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingSearchFilterComponent } from './voting-search-filter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('VotingSearchFilterComponent', () => {
  let component: VotingSearchFilterComponent;
  let fixture: ComponentFixture<VotingSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingSearchFilterComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
