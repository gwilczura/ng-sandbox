import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingSearchListComponent } from './voting-search-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('VotingSearchListComponent', () => {
  let component: VotingSearchListComponent;
  let fixture: ComponentFixture<VotingSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingSearchListComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
